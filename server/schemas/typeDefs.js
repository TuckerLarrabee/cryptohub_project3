const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    coins: [Crypto]
  }

  type Crypto {
    _id: ID
    cryptocurrency: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    crypto: [Crypto]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    favorite(username: String!, cryptocurrency: String!): Crypto
  }
`;

module.exports = typeDefs;
