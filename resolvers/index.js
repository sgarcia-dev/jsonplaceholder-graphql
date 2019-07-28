const Post = require('./post.resolver.js');

module.exports = {
  Query: {
    ...Post.Query
  },
  Mutation: {
    ...Post.Mutation
  }
}