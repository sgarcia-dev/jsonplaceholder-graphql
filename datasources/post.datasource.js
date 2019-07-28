
const { RESTDataSource } = require('apollo-datasource-rest');
const { handle404 } = require('./utils.js');

class PostAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  async getPosts() {
    return await this.get('posts');
  }

  async getPost({ id }) {
    try {
      return await this.get(`posts/${id}`);
    } catch (err) {
      return handle404(err);
    }
  }

  async createPost({ post }) {
    return await this.post('posts', {
      ...post
    })
  }

  async editPost({ id, post }) {
    try {
      return await this.put(`posts/${id}`, {
        ...post
      });
    } catch (err) {
      return handle404(err);
    }
  }

  async deletePost({ id }) {
    try {
      await this.delete(`posts/${id}`);
      return true;
    } catch (err) {
      return handle404(err);
    }
  }
}

module.exports = PostAPI;