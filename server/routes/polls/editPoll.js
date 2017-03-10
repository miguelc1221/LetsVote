const Poll = require('../../models/poll');
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  const decoded = jwt.decode(req.query.token);
  Poll.findById(req.params.id)
    .then((poll) => {
      if (poll.user !== decoded.user._id) {
        return res.status(401).json({
          title: 'Not Authenticated',
          error: {message: 'Users do not match'}
        });
      }
      poll.answers = req.body.answers;
      poll.save()
        .then((result) => {
          return res.status(200).json({
            message: 'Updated message',
            obj: result
          })
        })
        .catch((error) => {
          return res.status(500).json({
            title: 'An error occurred',
            error: error
          });
      });
    })
    .catch((err) => {
      console.log(err)
      return res.status(500).json({
          title: 'An error occurred',
          error: err
      });
    });
};
