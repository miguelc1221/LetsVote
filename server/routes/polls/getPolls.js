const Poll = require("../../models/poll");

module.exports = (req, res) => {
  console.log(req.user.id);
  return Poll.find({
    user: req.user.id
  })
    .then(polls => {
      res.status(200).json({
        message: "Success",
        polls: polls
      });
    })
    .catch(err => {
      res.status(500).json({
        title: "An error occurred",
        error: err
      });
    });
};
