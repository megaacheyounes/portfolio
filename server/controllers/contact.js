const fieldRequired = (field, res) =>
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
      return fieldRequired(key, res);
    }

  email = {
    to: process.env.CONTACT_EMAIL,
    from: email,
    subject: "[FROM ONLINE RESUME] " + subject,
    text: message,
  };
  console.log("contact email: " + email.to);

  sendMail(req, res, email);
};

const sgMail = require("@sendgrid/mail");

function sendMail(req, res, email) {
  //smtp-relay.gmail.com
  let apiKey = process.env.SENDGRID_API_KEY;
  sgMail.setApiKey(apiKey);

  sgMail.send(email, false, (err, result) => {
    if (err) {
      console.log("send email:" + err);
      return res.status(403).json(err);
    }
    console.log(result);
    return res.json("email was sent successfully.");
  });
}

module.exports = {
  sendMessage,
};
