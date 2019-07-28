
const { RESTDataSource } = require('apollo-datasource-rest');

class PostAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  async getPosts() {
    return await this.get('posts');
  }

  async getPost({ id }) {
    return await this.get(`posts/${id}`);
  }

  async createPost({ title, body }) {
    return await this.post('posts', {
      title,
      body
    })
  }

  async editPost({ id, title, body }) {
    return await this.put(`posts/${id}`, {
      title,
      body
    });
  }

  async deletePost({ id }) {
    await this.delete(`posts/${id}`);
    return true;
  }
}

module.exports = PostAPI;