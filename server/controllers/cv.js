const path = require("path");

let statController = require("./stats");

let showCV = async (req, res) => {
  try {
    await statController.registerStat(req);
  } catch (e) {
    console.log(e);
  }

  var cvs = fs.readdirSync("../../files").filter((fn) => fn.endsWith(".cv.*"));

  console.log("cvs", cvs);

  // const cvName = (type) => cvs[0];

  // const cvPath = path.join(__dirname, "../../files/" + cvName(type));
  res.sendFile(cvPath);
};

module.exports = {
  showCV,
};
