const Poll = require("../../models/poll");

module.exports = (req, res) => {
  console.log("hi");
  return Poll.find()
    .populate("user", "email")
    .then(polls => {
      res.status(200).json({
        message: "Success",
        obj: polls
      });
    })
    .catch(err => {
      res.status(500).json({
        title: "An error occurred",
        error: err
      });
    });
};
