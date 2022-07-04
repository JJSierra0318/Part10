import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ownerAvatarUrl
          fullName
          description
          language
          reviewCount
          forksCount
          stargazersCount
          ratingAverage
        }
      }
    }
  }
`;

export const GET_USER = gql`
  query {
    me {
      id
      username
    }
  }
`;

// other queries...