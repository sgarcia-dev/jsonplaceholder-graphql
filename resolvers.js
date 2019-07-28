module.exports = {
  Query: {
    posts: (parent, args, context, info) => {
      return [
        {
          id: 123,
          title: 'Post 1',
          body: 'lorem ipsum sil amet'
        },
        {
          id: 456,
          title: 'Post 2',
          body: 'lorem ipsum sil amet'
        },
        {
          id: 789,
          title: 'Post 3',
          body: 'lorem ipsum sil amet'
        }
      ];
    }
  }
}