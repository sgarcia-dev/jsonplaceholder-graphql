
const { RESTDataSource } = require('apollo-datasource-rest');

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  async getUsers() {
    return await this.get('users');
  }

  async getUser({ id }) {
    return await this.get(`users/${id}`);
  }

  async createUser({ user }) {
    return await this.post('users', {
      ...user
    })
  }

  async editUser({ id, user }) {
    return await this.put(`users/${id}`, {
      ...user
    });
  }

  async deleteUser({ id }) {
    await this.delete(`users/${id}`);
    return true;
  }
}

module.exports = UserAPI;