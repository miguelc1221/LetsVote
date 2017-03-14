const Poll = require("../../models/poll");

module.exports = (req, res) => {
  Poll.findByIdAndRemove(req.params.id)
    .then(poll => {
      return res.status(200).json({
        message: "Deleted message",
        polls: poll
      });
    })
    .catch(err => {
      return res.status(500).json({
        title: "An error occurred",
        error: err
      });
    });
};
