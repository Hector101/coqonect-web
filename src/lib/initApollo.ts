import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache , NormalizedCacheObject} from 'apollo-cache-inmemory';
import { createPersistedQueryLink } from 'apollo-link-persisted-queries';
import fetch from 'isomorphic-unfetch';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;


export function initApolloClient(initialState?: NormalizedCacheObject, cookie?: string) {
  if (typeof window === 'undefined') {
    return createApolloClient(initialState, cookie);
  }

  if (!apolloClient) {
    apolloClient = createApolloClient(initialState);
  }

  return apolloClient;
}

function createApolloClient(initialState: NormalizedCacheObject = {}, cookie?: string):
  ApolloClient<NormalizedCacheObject> {
  const headers = cookie ? {cookie} : undefined;
  const link = createPersistedQueryLink().concat(new HttpLink({
    uri: process.env.API_URL + '/graphql',
    credentials: 'include',
    headers,
    fetch,
    useGETForQueries: true,
  }));
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link,
    cache: new InMemoryCache().restore(initialState),
    connectToDevTools: true,
  });
}
