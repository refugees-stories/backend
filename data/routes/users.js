const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../models/users.js');
const Stories = require ('../models/stories.js')
const { authenticate, jwtKey } = require('./auth/authenticate.js');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/stories', authenticate, getStories);
};

function register(req, res) {
  let user = req.body;
  const hash = bcryptjs.hashSync(user.password, 14);
  user.password = hash;

  Users
    .add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(err => {
      res.status(500).json({ message: `${err}` });
    });
};

function login(req, res) {
  let { username, password } = req.body;

  Users
    .findBy({ username })
    .first()
    .then(user => {
      if (user && bcryptjs.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome, ${username}`,
          token
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      };
    })
    .catch(err => {
      res.status(500).json({ message: `${err}` });
    });
};

async function getStories(req, res) {
  let { story } = req.body;
  const requestOptions = {
    headers: { accept: 'application/json' }
  };

  Stories
    .find({ story }, requestOptions)
    .then(rows => {
      res.status(200).json(rows)
    })
    .catch(err => {
      res.status(500).json({ message: `${err}` });
    });
};

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    roles: ['user']
  };
  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, jwtKey, options);
};