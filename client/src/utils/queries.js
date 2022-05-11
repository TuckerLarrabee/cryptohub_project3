import { gql } from "@apollo/client";

export const QUERY_CRYPTOS = gql`
  {
    crypto {
      cryptocurrency
    }
  }
`;

export const QUERY_USER = gql`
  query getUser {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

export const QUERY_ME = gql`
  query getMe {
    me {
      _id
      username
      coins {
        cryptocurrency
        _id
      }
    }
  }
`;
