
const { RESTDataSource } = require('apollo-datasource-rest');

class PostAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  async getPosts() {
    return await this.get('posts');
  }
}

module.exports = PostAPI;