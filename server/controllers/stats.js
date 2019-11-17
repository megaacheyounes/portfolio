const useragent = require('useragent');
const Stat = require('../models/stat');
const geocoding = require('reverse-geocoding');
const dbService = require('../services/dbService');

let loadStats = async (req, res) => {

  await dbService.connect();

  let secret = req.queryString('secret');

  if (secret !== 'nopass')
    return res.status(403).end('You are not welcome here.');

  try {

    var stats = await dbService.getStats();
  } catch (err) {
    res.json({
      err
    })
  }


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
  if (req.url && req.url.indexOf('stats') !== -1)
    return;
  await dbService.connect();

  return new Promise(async (resolve, reject) => {

    //  console.log('register stat');
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
    let route = req.url;
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
      method,
      route
    });
    // console.log('stat', stat);
    await dbService.saveStats(stat);
    resolve();
  })
}

module.exports = {
  loadStats,
  registerStat,

};
