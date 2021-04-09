const mongoose = require("mongoose");
const Stat = require('../models/stat');


const connect = () => {
  const DATABASE_URL = process.env.MONGODB_URL;
  console.log("db url: ",DATABASE_URL);
  return mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
  });
};

const getStats = () => {
  return Stat.find().sort("-date").exec();
};

const saveStats = (stat) => {
  new Promise((resolve, reject) => {
    try {
      stat.save((err, doc) => {
        console.log("err = ", err, " ,doc=", doc);
        resolve();
      });
    } catch (e) {
      console.log('save failed',e);
      resolve();
    }
  });
};

module.exports = {
  connect,
  getStats,
  saveStats,
};
