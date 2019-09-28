let mongoose = require('mongoose');

let statSchema = new mongoose.Schema({
  date: Date,
  ip: String,
  browser: String,
  network_type: String,
  language: String,
  os: String,
  device: String,
  lat: Number,
  lon: Number,
  location: String,
  method: String,
});

module.exports = mongoose.model('stat', statSchema);
