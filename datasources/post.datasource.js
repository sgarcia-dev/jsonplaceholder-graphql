
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

  async createPost({ title, body }) {
    return await this.post('posts', {
      title,
      body
    })
  }

  async editPost({ id, title, body }) {
    try {
      return await this.put(`posts/${id}`, {
        title,
        body
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