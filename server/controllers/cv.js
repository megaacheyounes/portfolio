const path = require('path');

let statController = require('./stats');

let showCV = async (req, res) => {
  await statController.registerStat(req);
  const cvName = 'megaache_younes_web_android_dev';
  res.sendFile(path.join(__dirname, '../../files/' + cvName + '.cv.pdf'));
}
module.exports = {
  showCV
};
