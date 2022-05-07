const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: [true, 'Please provide username'],
    unique: [
      true,
      'Please enter a different username, this name is already taken',
    ],
  },
  password: {
    type: String,
    required: [true, 'please provide a password'],
    // maxlength: 18,
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) next();

  this.password = await bcrypt.hash(this.password, 12);

  next();
});

userSchema.methods.comparePassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('users', userSchema);

module.exports = User;
