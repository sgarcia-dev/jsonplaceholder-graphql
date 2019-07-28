const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
const resolvers = require('./resolvers');
const dataSources = require('./datasources');

const schema = fs.readFileSync('./schema.graphql');
const typeDefs = gql`${schema}`;
const port = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources
});

server.listen(port).then(({ url }) => {
  console.log(`🚀 Apollo Server ready at ${port}`);
});
