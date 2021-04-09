const {
  check
} = require('express-validator');

const LOGIN = 'login';
const REGISTER = 'register';
const PASS_MAX_LENGTH = '32';
const PASS_MIN_LENGTH = '6';

const RULES = {
  'login': [
    check('email', 'email is either invalid or missing').exists().isEmail(),
    check('password', 'password is either too short, too long or missing').exists().isLength({
      min: PASS_MIN_LENGTH,
      max: PASS_MAX_LENGTH
    })
  ],
  'register': [
    //not allowed
  ]
}

exports.validate = method => RULES[method];
