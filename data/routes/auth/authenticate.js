const jwt = require('jsonwebtoken');
const jwtKey = process.env.JWT_SECRET || 'To know a secret is to be accomplice.'

module.exports = {
  authenticate,
  jwtKey
};

function authenticate(req, res, next) {
  const token = req.get('Authorization');

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) {
        return res.status(401).json(err);
      }
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(401).json({ message: 'No token provided. Tokens must be set on the Authorization Header.' });
  };
};