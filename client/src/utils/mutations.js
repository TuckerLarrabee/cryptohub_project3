import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const FAVORITE_COIN = gql`
  mutation favoriteCoin($cryptocurrency: String!) {
    favorite(cryptocurrency: $cryptocurrency) {
      cryptocurrency
    }
  }
`;

export const UNFAVORITE_COIN = gql`
  mutation unfavoriteCoin($cryptocurrency: String!) {
    unfavorite(cryptocurrency: $cryptocurrency) {
      cryptocurrency
    }
  }
`;
