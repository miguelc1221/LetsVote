const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const User = require('./user');

const Schema = mongoose.Schema;

const PollSchema = new Schema({
  question: { type: String, required: true },
  answers: [{ type: String}],
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

PollSchema.post('remove', function (poll) {
    User.findById(poll.user)
      .then((user) => {
        user.polls.pull(poll);
        user.save();
      })
      .catch((err) => {
        return err;
      });
});

module.exports = mongoose.model('Poll', PollSchema);
