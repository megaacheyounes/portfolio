const nodemailer = require("nodemailer");

const getNodemailerTransporter = () => {
  const NODEMAILER_CONFIG = {
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  };
  console.log("nodemailer config: ", NODEMAILER_CONFIG);
  return nodemailer.createTransport(NODEMAILER_CONFIG);
};

const fieldRequiredErrorResponse = (field, res) =>
  res.status(400).json(`'${field}' is missing!`);

let sendMessage = (req, res) => {
  if (!req.body.message && !req.body.email) {
    res.status(400);
    res.json("error");
    return;
  }

  name = req.bodyString("name");
  email = req.bodyString("email");
  subject = req.bodyString("subject");
  message = req.bodyString("message");

  const requiredFields = {
    name,
    email,
    subject,
    message,
  };

  for (let key in requiredFields)
    if (!requiredFields[key]) {
      return fieldRequiredErrorResponse(key, res);
    }

  email = {
    to: process.env.CONTACT_EMAIL,
    from: email,
    subject: "[ONLINE RESUME MESSAGE] " + subject,
    text: message,
  };
//  console.log("  email: ", email);

  sendMail(req, res, email);
};

function sendMail(req, res, email) {
  getNodemailerTransporter().sendMail(email, function (error, info) {
    if (error) {
      //console.log(error);
      return res.status(403).json(error);
    } else {
     // console.log("Email sent: " + info.response);
      return res.json("email was sent successfully.");
    }
  });
}

module.exports = {
  sendMessage,
};
