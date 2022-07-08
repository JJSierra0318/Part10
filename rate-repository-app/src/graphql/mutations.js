import { gql } from "@apollo/client";

export const AUTHENTICATE = gql`
  mutation authenticate($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const NEW_REVIEW = gql`
  mutation newReview($repositoryName: String!, $ownerName: String!, $rating: Int!, $review: String) {
    createReview(review: { repositoryName: $repositoryName, ownerName: $ownerName, rating: $rating, text: $review }) {
      repositoryId
    }
  }
`;