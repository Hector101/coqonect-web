import gql from 'graphql-tag';


export const AUTHENTICATED_USER = gql`
  query {
    client {
      authenticatedUser {
        email
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

export const CHANGE_PASSWORD = gql`
  mutation changePassword($oldPassword: String!, $newPassword: String!) {
    client {
      changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {
        message
      }
    }
  }
`;

export const SKILL_CATEGORIES = gql`
  query {
    client {
      skillCategories {
        id
        name
        skills {
          id
          name
        }
      }
    }
  }
`;

export const ADD_USER_SKILL = gql`
  mutation addUserSkill($skillId: String!, $description: String!) {
    client {
      addUserSkill(skillId: $skillId, description: $description) {
        message
      }
    }
  }
`;
