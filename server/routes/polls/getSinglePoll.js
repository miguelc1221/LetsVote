const Poll = require("../../models/poll");

module.exports = (req, res) => {
  return Poll.findById(req.params.id)
    .then(poll => {
      res.status(200).json({
        message: "Success",
        poll: poll
      });
    })
    .catch(err => {
      res.status(500).json({
        title: "An error occurred",
        error: err
      });
    });
};
