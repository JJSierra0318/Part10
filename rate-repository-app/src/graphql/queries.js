import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
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

export const GET_REPOSITORY = gql`
query getRepo($id: ID!) {
  repository(id: $id) {
    id
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
`

export const GET_USER = gql`
  query {
    me {
      id
      username
    }
  }
`;

// other queries...