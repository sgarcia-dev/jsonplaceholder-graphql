const Post = require('./post.resolver.js');
const User = require('./user.resolver.js');

module.exports = {
  Query: {
    ...Post.Query,
    ...User.Query
  },
  Mutation: {
    ...Post.Mutation,
    ...User.Mutation
  }
}