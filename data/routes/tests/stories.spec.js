const stories = require('../stories.js');
const request = require('supertest');

describe('stories.get(\'/api/stories\')', () => {
  it('Returns Status Code: 200.', async () => {
    let res = await request(stories).get('/');
    expect(res.status).toBe(200);
  });
  it('Returns JSON data.', async () => {
    let res = await request(stories).get('/');
    expect(res.type).toBe('application/json');
  });
  it('Functions without error.', async () => {
    let res = await request(stories).get('/');
    expect(typeof res.body).toEqual('object');
  });
});