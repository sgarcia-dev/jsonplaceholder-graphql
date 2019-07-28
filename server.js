const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
const resolvers = require('./resolvers.js');

const schema = fs.readFileSync('./schema.graphql');
const typeDefs = gql`${schema}`;

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Apollo Server ready at ${url}`);
});
