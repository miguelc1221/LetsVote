const Poll = require("../../models/poll");

module.exports = (req, res) => {
  return Poll.find({
    user: req.user.id
  })
    .then(polls => {
      if (!polls) {
        return res.status(404).json({
          message: "polls not found"
        });
      }
      res.status(200).json({
        message: "Success",
        polls: polls
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "An error occurred",
        error: err
      });
    });
};
