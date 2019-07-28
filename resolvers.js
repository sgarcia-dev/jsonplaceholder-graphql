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
  }
}