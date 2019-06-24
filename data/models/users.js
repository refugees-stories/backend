const db = require('../config/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db('users').select('id', 'username', 'password');
};

function findBy(filter) {
  return db('users').where(filter);
};

function findById(id) {
  return db('users')
    .where({ id })
    .first();
};

async function add(users) {
  const [id] = await db('users').insert(users);
  return findById(id);
};