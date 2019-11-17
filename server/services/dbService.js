const mongoose = require('mongoose');
const Stat = require('../models/stat');
require('dotenv').config();

const DATABASE_URL = process.env.PORTFOLIO_MONGODB_URL;

const connect = () => {
  return mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true
  });
}

const getStats = () => {
  return Stat.find().sort('-date').exec();
}

const saveStats = stat => {
  new Promise((resolve, reject) => {
    stat.save((err, doc) => {
      //    console.log('err, doc', err, doc);
      resolve();
    });
  });
}

module.exports = {
  connect,
  getStats,
  saveStats
}
