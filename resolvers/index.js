const Post = require('./post.resolver.js');
const User = require('./user.resolver.js');
const Comment = require('./comment.resolver.js');

module.exports = {
  Query: {
    ...Post.Query,
    ...User.Query,
    ...Comment.Query
  },
  Mutation: {
    ...Post.Mutation,
    ...User.Mutation,
    ...Comment.Mutation
  },
  Post: Post.Fields,
  User: User.Fields,
  Comment: Comment.Fields
}