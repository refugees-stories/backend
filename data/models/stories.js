const db = require('../config/dbConfig.js');

module.exports = {
  find
};

function find() {
  return db('stories').select('id', 'name', 'story');
};