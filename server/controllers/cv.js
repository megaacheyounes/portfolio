const path = require('path');

let statController = require('./stats');

let showCV = async (req, res) => {
  await statController.registerStat(req);
  res.sendFile(path.join(__dirname, '../../files/web_android_dev_megaache_younes.cv.pdf'));  
}
module.exports = {
  showCV
};
