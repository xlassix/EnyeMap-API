const { gql } = require('apollo-server-express');

const schema = gql`

  type history {
    id: String
    query: String
    radius: Int
  }

  type Query {
    test :String
    getHistories(userId: String): [history]
  }
`;

module.exports = schema;