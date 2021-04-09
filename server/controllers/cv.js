const path = require("path");
const fs =require('fs');

let statController = require("./stats");

let showCV = async (req, res) => {
  try {
  await statController.registerStat(req);

  } catch (e) {
    console.log(e);
  }

  const filesPath = path.join(__dirname, "../../files/");
  var cvs = fs.readdirSync(filesPath).filter((fn) => fn.endsWith(".cv.pdf"));

  console.log("cvs", cvs);

  // const cvName = (type) => cvs[0];

    const cvPath = path.join(__dirname, "../../files/" + cvs[0]);
   res.sendFile(cvPath);
   
};

module.exports = {
  showCV,
};
