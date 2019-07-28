const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');

const schema = fs.readFileSync('./schema.graphql');
const typeDefs = gql`${schema}`;

const server = new ApolloServer({
  typeDefs
});

server.listen().then(({ url }) => {
  console.log(`🚀 Apollo Server ready at ${url}`);
});
