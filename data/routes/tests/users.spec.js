const users = require('../users.js');
const request = require('supertest');

describe('users.post(\'/register\')', () => {
  it('Returns Status Code: 201 with correct data.', async () => {
    const body = {
      username: 'username',
      password: 'password'
    };
    let res = await request(users).post('/register').send(body);
    expect(res.status).toBe(201);
  }); 
  it('Returns an object.', async () => {
    const body = {
      username: 'username',
      password: 'password'
    };
    let res = await request(users).post('/register').send(body);
    expect(typeof res.body).toEqual('object');
  });
});

describe('users.post(\'/login\')', () => {
  it('Returns Status Code: 201 with correct data.', async () => {
    const body = {
      username: 'username',
      password: 'password'
    };
    let res = await request(users).post('/login').send(body);
    expect(res.status).toBe(200);
  }); 
  it('Returns an object.', async () => {
    const body = {
      username: 'username',
      password: 'password'
    };
    let res = await request(users).post('/login').send(body);
    expect(typeof res.body).toEqual('object');
  });
  it('Returns Status Code: 401 with incorrect credentials.', async () => {
    const body = {
      username: 'username',
      password: 'alsdfk'
    };
    let res = await request(users).post('/login').send(body);
    expect(res.status).toBe(401);
  });
});

describe('users.post(\'/submit\')', () => {
  it('Returns Status Code: 201 with correct data.', async () => {
    const body = {
      author: 'Author',
      title: 'Title',
      image: null,
      body: 'Body.'
    };
    let res = await request(users).post('/submit').send(body);
    expect(res.status).toBe(201);
  }); 
  it('Returns an object.', async () => {
    const body = {
      author: 'Author',
      title: 'Title',
      image: null,
      body: 'Body.'
    };
    let res = await request(users).post('/submit').send(body);
    expect(typeof res.body).toEqual('object');
  });
  it('Returns Status Code: 422 with missing data.', async () => {
    const body = {
      author: 'Author',
      title: 'Title',
      image: null
    };
    let res = await request(users).post('/submit').send(body);
    expect(res.status).toBe(422);
  });
});