exports.seed = function(knex, Promise) {
  return knex('stories')
    .truncate()
    .then(function() {
      return knex('stories').insert([
        {
          name: 'Jamaal al-Nawaz',
          story: 'My family and I are from Aleppo (Syria). We were fortunate to have left during the initial conflict, and were allowed to settle in Germany, but others of my family–... They...were not so lucky.'
        },
      ]);
    });
};