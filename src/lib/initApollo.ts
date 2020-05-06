import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache , NormalizedCacheObject} from 'apollo-cache-inmemory';
import { createPersistedQueryLink } from 'apollo-link-persisted-queries';
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-unfetch';
import store from 'store';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;


export function initApolloClient(initialState?: NormalizedCacheObject) {
  if (typeof window === 'undefined') {
    return createApolloClient(initialState);
  }

  if (!apolloClient) {
    apolloClient = createApolloClient(initialState);
  }

  return apolloClient;
}

function createApolloClient(initialState: NormalizedCacheObject = {}):
  ApolloClient<NormalizedCacheObject> {

  const httpLink = createHttpLink({
    uri: `${process.env.API_URL}/graphql`,
    fetch,
  });

  const authLink = setContext((_, { headers }) => {
    const token = store.get('__cnt');

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const link = createPersistedQueryLink().concat(authLink.concat(httpLink));

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link,
    cache: new InMemoryCache().restore(initialState),
    connectToDevTools: process.env.NODE_ENV === 'development',
  });
}
