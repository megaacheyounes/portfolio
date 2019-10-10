const path = require('path');

let statController = require('./stats');

let showCV = async (req, res) => {
  await statController.registerStat(req);
  const type = req.queryString('type');
  const cvName = type => `YounesMegaache.${type}.cv.pdf`;
  res.sendFile(path.join(__dirname, '../../files/' + cvName(type)));
}

module.exports = {
  showCV
};
