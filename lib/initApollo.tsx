import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-unfetch';

let apolloClient: any = null;

function create(initialState: any, { headers }: any) {
  const isBrowser = typeof window !== 'undefined';
  const httpLink = createHttpLink({
    uri: `${process.env.API_URL}/graphql`,
    credentials: 'include',
    fetch,
  });

  const authLink = setContext(() => {
    return { headers };
  });

  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default function initApollo(initialState: any,  options: any) {
  if (typeof window === 'undefined') {
    return create(initialState, options);
  }

  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
}
