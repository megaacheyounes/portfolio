const jwt = require('jsonwebtoken');
const fs = require('fs');

const {
  JWT_OPTIONS,
  KEYS_BASE_PATH,
  TOKEN_ENCRYPTION_ALGORITHM
} = require('../controllers/auth');

const TOKEN_HEADER = 'X-AUTHORIZATION';
const ERROR_AUTHORIZATION_MESSAGE = 'you are not authorized to access this information';

const PUBLIC_KEY_PATH = `${KEYS_BASE_PATH}/public.key`;

const JWT_OPTIONS_VERIFY = {
  ...JWT_OPTIONS,
  algorithm: [TOKEN_ENCRYPTION_ALGORITHM]
}

const getPublicKey = () => fs.readFileSync(PUBLIC_KEY_PATH);

const verify = (req, res, next) => {

  const token = req.get(TOKEN_HEADER);

  if (!token) {
    return res.status(403).json(ERROR_AUTHORIZATION_MESSAGE)
  }
  let user = null;

  try {
    user = jwt.verify(token, getPublicKey(), JWT_OPTIONS_VERIFY);
  } catch ($e) {
    user = null;
  }

  if (user !== null) {
    req.user = user;
    return next();
  }
  return res.status(403).json(ERROR_AUTHORIZATION_MESSAGE);

}




exports.verify = verify;
