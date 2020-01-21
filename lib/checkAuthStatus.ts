import gql from 'graphql-tag';

export default (apolloClient: any) => {
  return apolloClient.query({
    query: gql`
      query getUser {
        client {
          isAuthenticated
        }
      }
    `,
  })
  .then(({ data }: any) => {
    return { isAuthenticated: data.client.isAuthenticated };
  })
  .catch(() => {
    return { isAuthenticated: false };
  });
};
