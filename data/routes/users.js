const express = require('express')
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../models/users.js');
const Stories = require('../models/stories.js');
const { authenticate, jwtKey } = require('./auth/authenticate.js');

const users = express();
users.use(express.json());

users.post('/register', async (req, res) => {
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
});

users.post('/login', (req, res) => {
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
});

users.post('/submit', authenticate, async (req, res) => {
  const { body } = req.body;
  const requestOptions = {
    headers: { accept: 'application/json' }
  };

  try {
    const newStory = await Stories.add({ body }, requestOptions);
    if (body) {
      res.status(201).json(newStory);
    } else {
      res.status(422).json({ message: `Please provide a story to submit it.` });
    };
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `${err}` });
  };
});

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

module.exports = users;