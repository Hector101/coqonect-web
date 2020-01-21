import { FunctionComponent } from 'react';
import { NextPageContext } from 'next';
import ApolloClient from 'apollo-client';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';

export interface IMyContext extends NextPageContext {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}

export default interface INextFunctionalComponent<P> extends FunctionComponent<P> {
  getInitialProps?: (ctx: IMyContext) => Promise<P>;
}
