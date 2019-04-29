const path = require('path');

let showSitemap = (req, res) => {
  res.sendFile(path.join(__dirname, '../../files/sitemap.xml'));
}

module.exports = {
  showSitemap
};
