const ERROR_BAD_REQUEST = 400;
const ERROR_NOT_FOUND = 404;
const ERROR_DEFAULT = 500;
const SALT_ROUNDS = 10;
const DEV_SECRET = 'someverysecretkey';
const REGEX = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;

module.exports = {
  ERROR_NOT_FOUND,
  ERROR_BAD_REQUEST,
  ERROR_DEFAULT,
  SALT_ROUNDS,
  DEV_SECRET,
  REGEX,
};
