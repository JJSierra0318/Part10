import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query getRepos($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String){
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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
    url
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
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