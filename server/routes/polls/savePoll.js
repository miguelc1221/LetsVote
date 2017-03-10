const Poll = require('../../models/poll');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  const decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id)
    .then((user) => {
      const poll = new Poll({
        question: req.body.question,
        answers: req.body.answers
      });
      poll.save()
        .then((message) => {
          return res.status(201).json({
            message: 'Saved message',
            obj: message
          })
        })
        .catch((err) => {
          return res.status(500).json({
            title: 'An error occurred',
            error: err
          });
        });
    })
    .catch((err) => {
      return res.status(500).json({
          title: 'An error occurred',
          error: err
      });
    })
};
