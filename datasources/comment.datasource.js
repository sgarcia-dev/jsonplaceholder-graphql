
const { RESTDataSource } = require('apollo-datasource-rest');

class CommentAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  async getComments() {
    return await this.get('comments');
  }

  async getComment({ id }) {
    return await this.get(`comments/${id}`);
  }

  async createComment({ comment }) {
    return await this.post('comments', {
      ...comment
    })
  }

  async editComment({ id, comment }) {
    return await this.put(`comments/${id}`, {
      ...comment
    });
  }

  async deleteComment({ id }) {
    await this.delete(`comments/${id}`);
    return true;
  }
}

module.exports = CommentAPI;