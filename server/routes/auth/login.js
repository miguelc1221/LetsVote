const createToken = require("./createToken");
const User = require("../../models/user");
const Poll = require("../../models/poll");

const login = (req, res) => {
  const email = req.body.email.toLowerCase();
  const password = req.body.password;
  const errorMsg = { Error: "Email and Password do not match" };

  if (!email || !password) {
    return res.status(422).send({ error: "All fields must be filled out" });
  }

  return User.findOne({ email: email })
    .then(user => {
      if (!user) {
        return res.status(422).send(errorMsg);
      }

      return user.comparePassword(password, (error, isMatch) => {
        if (error) {
          throw Error(error);
        }

        if (isMatch) {
          return createToken(user, (err, token) => {
            if (err) {
              throw Error(err);
            }

            return Poll.find({ user: user._id })
              .then(polls => {
                return res.json({
                  token: token,
                  polls: polls
                });
              })
              .catch(err => {
                throw new Error(err);
              });
          });
        }

        return res.status(422).send(errorMsg);
      });
    })
    .catch(err => {
      console.log(err);
      return res.status(422).send(err);
    });
};

module.exports = login;
