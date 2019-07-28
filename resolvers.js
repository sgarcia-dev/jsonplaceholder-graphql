module.exports = {
  Query: {
    posts: async (parent, args, context, info) => {
      const { postAPI } = context.dataSources;
      return await postAPI.getPosts();
    }
  }
}