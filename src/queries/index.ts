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
        skills {
          name
          evidence
          months
          years
          description
          status
        }
      }
    }
  }
`;

export const AUTHENTICATED_ADMIN = gql`
  query($status: String, $take: Int!, $skip: Int!, $email: String, $name: String, $skillName: String) {
    admin {
      userSkills(status: $status, take: $take, skip: $skip, email: $email, name: $name, skillName: $skillName) {
        id
        name
        status
        description
        evidence
        accountId
        profile {
          fullName
          imageUrl
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

export const CHANGE_PASSWORD = gql`
  mutation ChangePassword($oldPassword: String!, $newPassword: String!) {
    client {
      changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {
        message
      }
    }
  }
`;

export const SKILL_CATEGORIES = gql`
  query {
    public {
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
  mutation AddUserSkill($skillId: ID!, $description: String!, $evidence: String!, $months: Int!, $years: Int!) {
    client {
      addUserSkill(skillId: $skillId, description: $description, evidence: $evidence, months: $months, years: $years) {
        message
      }
    }
  }
`;
