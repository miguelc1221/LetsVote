const jwt = require('jsonwebtoken');
const config = require('../../config');

// create jwt token
export default (user, callback) => {
  jwt.sign({
    id: user.id,
  }, config.secretKey, {
    expiresIn: '1h',
  }, callback);
};