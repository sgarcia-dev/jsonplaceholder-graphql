module.exports = {
  Query: {
    posts: async (parent, args, context, info) => {
      const { postAPI } = context.dataSources;
      return await postAPI.getPosts();
    },
    post: async (parent, args, context, info) => {
      const { id } = args;
      const { postAPI } = context.dataSources;
      return await postAPI.getPost({ id });
    }
  },
  Mutation: {
    createPost: async (parent, args, context, info) => {
      const { title, body } = args;
      const { postAPI } = context.dataSources;
      return await postAPI.createPost({ title, body });
    },
    editPost: async (parent, args, context, info) => {
      const { id, title, body } = args;
      const { postAPI } = context.dataSources;
      return await postAPI.editPost({ id, title, body });
    },
    deletePost: async (parent, args, context, info) => {
      const { id } = args;
      const { postAPI } = context.dataSources;
      return await postAPI.deletePost({ id });
    },
  }
}