const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validate = require('mongoose-validator');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const emailValidator = [
  validate({
    validator: 'isEmail',
    message: 'Please provide a valid Email'
  })
]

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true ,
    required: true,
    unique: true,
    index: true,
    lowercase: true,
    validate: emailValidator
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  polls: [{ type: Schema.Types.ObjectId, ref: 'Poll' }]
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
}

UserSchema.pre('save', function(next) {
  var user = this;

  if(!user.isModified('password')) return next();

  bcrypt.genSalt(10, function(err, salt){
    if (err) return next(err)

    bcrypt.hash(user.password, salt, function(err,hash){
      if (err) return next(err);

      user.password = hash;
      next();
    })
  })
});

UserSchema.plugin(uniqueValidator, { message: 'Email is already taken'});

module.exports = mongoose.model('User', UserSchema);