module.exports = {
  Query: {
    users: async (parent, args, context, info) => {
      const { userAPI } = context.dataSources;
      return await userAPI.getUsers();
    },
    user: async (parent, args, context, info) => {
      const { id } = args;
      const { userAPI } = context.dataSources;
      return await userAPI.getUser({ id });
    }
  },
  Mutation: {
    createUser: async (parent, args, context, info) => {
      const { input } = args;
      const { userAPI } = context.dataSources;
      const user = getUserFromArgs(input);
      return await userAPI.createUser({ user });
    },
    editUser: async (parent, args, context, info) => {
      const { id, input } = args;
      const { userAPI } = context.dataSources;
      const user = getUserFromArgs(input);
      return await userAPI.editUser({ id, user });
    },
    deleteUser: async (parent, args, context, info) => {
      const { id } = args;
      const { userAPI } = context.dataSources;
      return await userAPI.deleteUser({ id });
    },
  },
  Fields: {
    posts: async (parent, args, context, info) => {
      const { id } = parent;
      const { postAPI } = context.dataSources;
      const posts = await postAPI.getPosts();
      return posts.filter(post => post.userId === id );
    }
  }
}

function getUserFromArgs(args) {
  return {
    name: args.name,
    username: args.username,
    email: args.email,
    address: {
      street: args.street,
      suite: args.suite,
      city: args.city,
      zipcode: args.zipcode,
      geo: {
        lat: args.lat,
        lng: args.lng
      }
    },
    phone: args.phone,
    website: args.website,
    company: {
      name: args.companyName,
      catchPhrase: args.companyCatchphrase,
      bs: args.companyBs
    }
  }
}