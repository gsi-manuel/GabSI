const request = require('supertest');
import {App} from './App';

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(App.getInstance().express).get('/');
    expect(response.statusCode).toBe(200);
  });
});
