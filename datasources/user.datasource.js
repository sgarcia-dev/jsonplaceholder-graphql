
const { RESTDataSource } = require('apollo-datasource-rest');
const { handle404 } = require('./utils.js');

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  async getUsers() {
    return await this.get('users');
  }

  async getUser({ id }) {
    try {
      return await this.get(`users/${id}`);
    } catch (err) {
      return handle404(err);
    }
  }

  async createUser({ user }) {
    return await this.post('users', {
      ...user
    })
  }

  async editUser({ id, user }) {
    try {
      return await this.put(`users/${id}`, {
        ...user
      });
    } catch (err) {
      return handle404(err);
    }
  }

  async deleteUser({ id }) {
    try {
      await this.delete(`users/${id}`);
      return true;
    } catch (err) {
      return handle404(err);
    }
  }
}

module.exports = UserAPI;