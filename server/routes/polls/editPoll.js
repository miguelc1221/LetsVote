const Poll = require("../../models/poll");

module.exports = (req, res) => {
  return Poll.findById(req.body.poll._id)
    .then(poll => {
      poll.options = req.body.poll.options;
      poll
        .save()
        .then(result => {
          return res.status(200).json({
            message: "Updated message",
            poll: result
          });
        })
        .catch(error => {
          return res.status(500).json({
            title: "An error occurred",
            error: error
          });
        });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({
        title: "An error occurred",
        error: err
      });
    });
};
