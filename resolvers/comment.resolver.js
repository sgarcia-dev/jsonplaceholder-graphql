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
      const { input } = args;
      const { commentAPI } = context.dataSources;
      const comment = getCommentFromInput(input);
      return await commentAPI.createComment({ comment });
    },
    editComment: async (parent, args, context, info) => {
      const { id, input } = args;
      const { commentAPI } = context.dataSources;
      const comment = getCommentFromInput(input);
      return await commentAPI.editComment({ id, comment });
    },
    deleteComment: async (parent, args, context, info) => {
      const { id } = args;
      const { commentAPI } = context.dataSources;
      return await commentAPI.deleteComment({ id });
    },
  },
  Fields: {
    post: async (parent, args, context, info) => {
      const { postId } = parent;
      const { postAPI } = context.dataSources;
      if (!postId) return null;
      return await postAPI.getPost({ id: postId });
    }
  }
}

function getCommentFromInput(args) {
  return {
    name: args.name,
    email: args.email,
    body: args.body
  }
}
