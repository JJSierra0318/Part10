import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query getRepos($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $first: Int, $after: String){
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after) {
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
      pageInfo {
        hasNextPage
        endCursor
        startCursor
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
query getRepo($id: ID!, $first: Int, $after: String) {
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
    reviews(first: $first, after: $after) {
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
      pageInfo {
        startCursor
        endCursor
        hasNextPage
      }
    }
  }
}
`

export const GET_USER = gql`
  query getUser($includeReviews: Boolean = false, $first: Int, $after: String) {
    me {
      id
      username
      reviews (first: $first, after: $after) @include(if: $includeReviews) {
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
          cursor
        }
        pageInfo {
          hasNextPage
          startCursor
          endCursor
        }
      }
    }
  }
`;

// other queries...