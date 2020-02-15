import React from 'react';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { NextPage } from 'next';

import { initApolloClient } from './initApollo';

import { IMyContext } from 'src/interfaces/NextFunctionalComponent';

export function withApollo<PageProps>(PageComponent: NextPage<PageProps>, { ssr = false } = {}) {
  type ApolloPageProps = PageProps & {
    apolloClient?: ApolloClient<NormalizedCacheObject> | null;
    apolloState?: NormalizedCacheObject;
  };

  const WithApollo: NextPage<ApolloPageProps> = ({ apolloClient, apolloState, ...pageProps }) => {
    const client = apolloClient || initApolloClient(apolloState);
    return (
      <ApolloProvider client={client}>
        <PageComponent {...(pageProps  as PageProps)} />
      </ApolloProvider>
    );
  };

  if (process.env.NODE_ENV !== 'production') {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';

    if (displayName === 'App') {
      console.warn('This withApollo HOC only works with PageComponents.');
    }

    WithApollo.displayName = `withApollo(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async (ctx: IMyContext) => {
      const { AppTree } = ctx;

      const cookie = ctx && ctx.req && ctx.req.headers && ctx.req.headers.cookie && String(ctx.req.headers.cookie);
      const apolloClient = (ctx.apolloClient = initApolloClient({}, cookie));

      let pageProps = {} as PageProps;
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      }

      if (typeof window === 'undefined') {
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        }

        if (ssr) {
          try {
            const { getDataFromTree } = await import('@apollo/react-ssr');
            await getDataFromTree(
              <AppTree
                pageProps={{
                  ...pageProps,
                  apolloClient,
                }}
              />,
            );
          } catch (error) {
            console.error('Error while running `getDataFromTree`', error);
          }
          Head.rewind();
        }
      }

      const apolloState = apolloClient.cache.extract();

      return {
        ...pageProps,
        apolloState,
      };
    };
  }

  return WithApollo;
}
