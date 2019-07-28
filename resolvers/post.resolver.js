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
      const { input } = args;
      const { postAPI } = context.dataSources;
      const post = getPostFromInput(input);
      return await postAPI.createPost({ post });
    },
    editPost: async (parent, args, context, info) => {
      const { id, input } = args;
      const { postAPI } = context.dataSources;
      const post = getPostFromInput(input);
      return await postAPI.editPost({ id, post });
    },
    deletePost: async (parent, args, context, info) => {
      const { id } = args;
      const { postAPI } = context.dataSources;
      return await postAPI.deletePost({ id });
    },
  },
  Fields: {
    user: async (parent, args, context, info) => {
      const { userId } = parent;
      const { userAPI } = context.dataSources;
      if (!userId) return null;
      return await userAPI.getUser({ id: userId });
    },
    comments: async (parent, args, context, info) => {
      const { id } = parent;
      const { commentAPI } = context.dataSources;
      const comments = await commentAPI.getComments();
      return comments.filter(comment => comment.postId === id);
    },
  }
}

function getPostFromInput(input) {
  return {
    title: input.title,
    body: input.body
  }
}
