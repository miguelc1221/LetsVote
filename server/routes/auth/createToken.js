const jwt = require('jsonwebtoken');
const config = require('../../config');

// create jwt token
const createToken = (user, callback) => {
  jwt.sign({
    id: user.id,
  }, config.secretKey, {
    expiresIn: '1h',
  }, callback);
};

module.exports = createToken;