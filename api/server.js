const express = require('express');

/* MIDDLEWARE */
const server = express();
server.use(express.json());

/* ROUTES */

/* SANITY CHECK */
server.get('/', (req, res) => {
  res.send(`Welcome to the bottom. Work your way to the top.`);
});

module.exports = server;