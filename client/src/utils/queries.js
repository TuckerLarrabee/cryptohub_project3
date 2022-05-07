import { gql } from '@apollo/client';

export const QUERY_CRYPTOS = gql`
 {
  crypto {
    cryptocurrency
  }
}
`

export const QUERY_USER = gql`
  {
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
