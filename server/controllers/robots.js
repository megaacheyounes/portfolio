const path = require('path');

let showRobotsFile = (req, res) => {
  res.sendFile(path.join(__dirname, '../../files/robots.txt'));
}

module.exports = {
  showRobotsFile
};
