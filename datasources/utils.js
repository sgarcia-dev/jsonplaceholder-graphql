module.exports = {
  handle404
};

function handle404(err) {
  const {
    extensions: {
      response: {
        status
      } = {}
    } = {}
  } = err;

  if (status === 404) {
    return null
  } else {
    throw (err);
  }
}
