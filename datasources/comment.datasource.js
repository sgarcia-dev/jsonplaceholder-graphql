
const { RESTDataSource } = require('apollo-datasource-rest');
const { handle404 } = require('./utils.js');

class CommentAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  async getComments() {
    return await this.get('comments');
  }

  async getComment({ id }) {
    try {
      return await this.get(`comments/${id}`);
    } catch (err) {
      return handle404(err);
    }
  }

  async createComment({ comment }) {
    return await this.post('comments', {
      ...comment
    })
  }

  async editComment({ id, comment }) {
    try {
      return await this.put(`comments/${id}`, {
        ...comment
      });
    } catch (err) {
      return handle404(err);
    }
  }

  async deleteComment({ id }) {
    try {
      await this.delete(`comments/${id}`);
      return true;
    } catch (err) {
      return handle404(err);
    }
  }
}

module.exports = CommentAPI;