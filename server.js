const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
const resolvers = require('./resolvers');
const { PostAPI, UserAPI } = require('./datasources');

const schema = fs.readFileSync('./schema.graphql');
const typeDefs = gql`${schema}`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    postAPI: new PostAPI(),
    userAPI: new UserAPI(),
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Apollo Server ready at ${url}`);
});
