const fs = require("fs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const dbService = require("../services/dbService");

const KEYS_BASE_PATH = __dirname + "/../keys";
const PRIVATE_KEY_PATH = `${KEYS_BASE_PATH}/private.key`;

const TOKEN_EXPIRES_IN = "24h";
const TOKEN_ENCRYPTION_ALGORITHM = "RS256";

const JWT_OPTIONS = {
  issuer: "megaache younes",
  subject: "megaache younes",
  audience: "megaache.younes.herokuapp.com",
  expiresIn: TOKEN_EXPIRES_IN,
};

const JWT_OPTIONS_SIGN = {
  ...JWT_OPTIONS,
  algorithm: TOKEN_ENCRYPTION_ALGORITHM,
};

const getPrivateKey = () => fs.readFileSync(PRIVATE_KEY_PATH);

const login = async (req, res) => {
  await dbService.connect();

  const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

  if (!errors.isEmpty()) {
    res.status(400).json({
      errors: errors.array(),
    });
    return;
  }

  const email = req.body.email;
  const password = req.body.password;

  console.log("auth attempt: email: ", email, " password: " + password);

  let user = await User.findOne({
    email
  }).exec();
  
  console.log("user:",user)

  // if ( user && bcrypt.compareSync(password, user.password)) {
  //   user = user.toObject();
  //   return generateToken(res, user);
  // }
   if ( user && password == user.password ) {
    user = user.toObject();
    return generateToken(res, user);
  }

  return res.status(401).json("wrong credentials");
};

const generateToken = (res, user) => {
  const token = jwt.sign(user, getPrivateKey(), JWT_OPTIONS_SIGN);
  return res.json({
    token,
  });
};

module.exports = {
  login,
  JWT_OPTIONS,
  KEYS_BASE_PATH,
  TOKEN_ENCRYPTION_ALGORITHM,
};
