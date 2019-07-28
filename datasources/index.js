const PostAPI = require('./post.datasource.js');
const UserAPI = require('./user.datasource.js');
const CommentAPI = require('./comment.datasource.js');

module.exports = () => ({
  postAPI: new PostAPI(),
  userAPI: new UserAPI(),
  commentAPI: new CommentAPI()
});
