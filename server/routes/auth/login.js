const createToken = require('./createToken');
const User = require('../../models/user');

const login = (req, res) => {
  const email = req.body.email.toLowerCase();
  const password = req.body.password;
  const errorMsg = { Error: 'Email and Password do not match' }

  if (!email || !password ) {
    return res.status(422).send({ error: 'All fields must be filled out' })
  }

  return User.findOne({ email: email })
    .then((user) => {
      return user.comparePassword(password, (error, isMatch) => {
        if (error) {
          throw Error(error);
        }

        if (isMatch) {
          return createToken(user, (err, token) => {
            if (err) {
              throw Error(err)
            }

            return res.json({
              token: token,
              polls: user.polls
            });
          })
        }
      });
    })
    .catch((err) => {
      return res.status(422).send(err);
    });
}

module.exports = login;