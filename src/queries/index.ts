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
  mutation editProfile($city: String!, $country: String!, $bio: String!, $fullName: String!) {
    client {
      editProfile(city: $city, country: $country, bio: $bio, fullName: $fullName) {
        message
      }
    }
  }
`;

export const CHANGE_PROFILE = gql`
  mutation changePassword($oldPassword: String!, $newPassword: String!) {
    client {
      changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {
        message
      }
    }
  }
`;
