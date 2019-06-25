const server = require('../users.js');
const request = require('supertest');

describe('server.post(\'/api/register\', register)', () => {
  it('Returns Status Code: 201 with correct data.', async () => {
    const body = {
      username: 'username',
      password: 'password'
    }
    let res = await request(server).post('/api/register').send(body);
    expect(res.status).toBe(201);
  }); 
});

describe('server.get(\'/api/stories\', authenticate, getStories)', () => {
  it('Returns Status Code: 200.', async () => {
    let res = await request(server).get('/api/stories');
    expect(res.status).toBe(200);
  });
  it('Returns JSON data.', async () => {
    let res = await request(server).get('/api/stories');
    expect(res.type).toBe('application/json');
  });
  it('Functions without error.', async () => {
    let res = await request(server).get('/api/stories');
    expect(typeof res.body).toEqual('object');
  });
});