const Poll = require("../../models/poll");
const User = require("../../models/user");

module.exports = (req, res) => {
  return User.findById(req.user.id)
    .then(user => {
      const poll = new Poll({
        question: req.body.poll.question,
        options: req.body.poll.options,
        user: req.user.id
      });
      poll
        .save()
        .then(message => {
          user.polls.push(message);
          user.save();

          return res.status(201).json({
            message: "Saved message",
            poll: message
          });
        })
        .catch(err => {
          return res.status(500).json({
            title: "An error occurred",
            error: err
          });
        });
    })
    .catch(err => {
      return res.status(500).json({
        title: "An error occurred",
        error: err
      });
    });
};
