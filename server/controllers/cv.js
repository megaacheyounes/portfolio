const path = require("path");

let statController = require("./stats");

const allowedTypes = [
  "softwareEngineer",
  //,'webDeveloper','AndroidEngineer'
];

let showCV = async (req, res) => {
  try {
    await statController.registerStat(req);
  } catch (e) {
    console.log(e);
  }

  const type = req.queryString("type");
  if (allowedTypes.indexOf(type) == -1) type = allowedTypes[0];

  const cvName = (type) => `YounesMegaache.${type}.cv.pdf`;

  const cvPath = path.join(__dirname, "../../files/" + cvName(type));
  res.sendFile(cvPath);
};

module.exports = {
  showCV,
};
