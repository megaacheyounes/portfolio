let mongoose = require('mongoose');
let useragent = require('useragent');
let Stat = require('../models/stat');
var geocoding = require('reverse-geocoding');

let url = process.env.MONGODB_URL || 'mongodb://megaache:Pink700fuk@ds115094.mlab.com:15094/portfolio';

let loadStats = async (req, res) => {

  await mongoose.connect(url);

  let secret = req.queryString('secret');

  if (secret !== 'Pink700$$')
    return res.status(403).end('You are not welcome here.');

  let stats = await Stat.find().sort('-date').exec();

  res.json(stats);
}

let reverseGeocode = async (lat, lon) => {

  return new Promise((resolve, reject) => {
    var config = {
      'latitude': lat,
      'longitude': lon
    };

    geocoding(config, (err, data) => {
      if (err)
        return reject(err);
      resolve(result.formattedAddress);

    });
    //return result.coutnry + ','  + result.locality + ',' + result.sublocality;
  })


}


let registerStat = async (req) => {
  await mongoose.connect(url);

  return new Promise((resolve, reject) => {

    console.log('register stat');
    useragent(true); //keeps useragent up to date with future useragent updates
    let ua = useragent.parse(req.header('user-agent'));

    let network_type = req.bodyString('nt');
    let lat = req.bodyFloat('lt');
    let lon = req.bodyFloat('ln');

    let location = (lat && lon ? reverseGeocode(lat, lon) : 'unknown');

    let device = ua.device.toString();
    let os = ua.os.toString();
    let browser = ua.toAgent();

    let ip = req.connection.remoteAddress;
    let language = req.header('accept-language');
    let method = req.method;
    let date = new Date();
    let stat = new Stat({
      ip,
      location,
      lat,
      lon,
      language,
      date,
      browser,
      network_type,
      os,
      device,
      method
    });
    console.log('stat', stat);
    stat.save((err, doc) => {
      console.log('err, doc', err, doc);
      resolve();
    });

  })
}

module.exports = {
  loadStats,
  registerStat,

};
