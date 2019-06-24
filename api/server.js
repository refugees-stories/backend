const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const usersRoutes = require('../data/routes/users.js');

/* MIDDLEWARE */
const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

/* ROUTES */
usersRoutes(server);

/* SANITY CHECK */
server.get('/', (req, res) => {
  res.send(`Welcome to the bottom. Work your way to the top.`);
});

module.exports = server;