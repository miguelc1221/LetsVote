const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
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
  polls: []
});

UserSchema.methods.comparePassword = function(password) {
  const user = this;
  return bcrypt.compareSync(password, user.password);
}

UserSchema.pre('save', function(next) {
  var user = this;

  if(!user.isModified('password')) return next();

  bcrypt.genSalt(10, function(err, salt){
    if (err) return next(err)

    bcrypt.hash(user.password, salt, null, function(err,hash){
      if (err) return next(err);

      user.password = hash;
      next();
    })
  })
});

UserSchema.plugin(uniqueValidator, { message: 'Email is already taken'});

module.exports = mongoose.model('User', UserSchema);