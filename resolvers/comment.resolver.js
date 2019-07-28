module.exports = {
  Query: {
    comments: async (parent, args, context, info) => {
      const { commentAPI } = context.dataSources;
      return await commentAPI.getComments();
    },
    comment: async (parent, args, context, info) => {
      const { id } = args;
      const { commentAPI } = context.dataSources;
      return await commentAPI.getComment({ id });
    }
  },
  Mutation: {
    createComment: async (parent, args, context, info) => {
      const { input: commentArgs } = args;
      const { commentAPI } = context.dataSources;
      const comment = getCommentFromArgs(commentArgs);
      return await commentAPI.createComment({ comment });
    },
    editComment: async (parent, args, context, info) => {
      const { id, input: commentArgs } = args;
      const { commentAPI } = context.dataSources;
      const comment = getCommentFromArgs(commentArgs);
      return await commentAPI.editComment({ id, comment });
    },
    deleteComment: async (parent, args, context, info) => {
      const { id } = args;
      const { commentAPI } = context.dataSources;
      return await commentAPI.deleteComment({ id });
    },
  }
}

function getCommentFromArgs(args) {
  return {
    name: args.name,
    email: args.email,
    body: args.body
  }
}
