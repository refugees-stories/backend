const db = require('../config/dbConfig.js');

module.exports = {
  add,
  find,
  findById,
  update,
  remove
};

function find() {
  return db('stories').select('id', 'name', 'story');
};

function findById(id) {
  return db('stories')
    .where({ id })
    .first();
};

async function add(stories) {
  const [id] = await db('stories').insert(stories);
  return findById(id);
};

function update(id, changes) {
  return db('stories')
    .where('id', id)
    .update(changes)
    .then(count => (count > 0 ? this.findById(id) : null))
    .first();
};

function remove(id) {
  return db('stories')
    .where('id', id)
    .del();
};