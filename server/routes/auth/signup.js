const createToken = require('./createToken');
const User = require('../../models/user');

const signup = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = new User({
    email: email,
    password: password,
  });

  if (!email || !password) {
    return res.status(422).send({ Error: 'All fields must be filled out' })
  }

  return user.save()
    .then((user) => {
      return createToken(user, (err, token) => {
        return res.json({ success: true, token: token });
      });
    })
    .catch((err) => {
      return res.status(422).send(err);
    })
}

module.exports = signup;