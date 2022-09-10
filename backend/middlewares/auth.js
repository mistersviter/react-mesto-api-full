const jwt = require('jsonwebtoken');
const { DEV_SECRET } = require('../utils/constants');
const AuthorizationError = require('../errors/AuthorizationError');

module.exports.auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new AuthorizationError('Необходима авторизация');
  }
  const token = authorization.replace('Bearer ', '');
  const { NODE_ENV, JWT_SECRET } = process.env;
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : DEV_SECRET);
  } catch (err) {
    throw new AuthorizationError('Необходима авторизация');
  }
  req.user = payload;
  return next();
};
