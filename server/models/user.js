const mongoose = require('mongoose');
const MODEL_NAME = 'user';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
  }
});
userSchema.index({
  email: 1
});
module.exports = mongoose.model(MODEL_NAME, userSchema);
