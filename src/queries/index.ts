import gql from 'graphql-tag';


export const AUTHENTICATED_USER = gql`
  query {
    client {
      authenticatedUser {
        profile {
          fullName
          imageUrl
          city
          country
          bio
        }
      }
    }
  }
`;

export const EDIT_PROFILE = gql`
  mutation EditProfile($city: String!, $country: String!, $bio: String!, $fullName: String!) {
    client {
      editProfile(city: $city, country: $country, bio: $bio, fullName: $fullName) {
        message
      }
    }
  }
`;
