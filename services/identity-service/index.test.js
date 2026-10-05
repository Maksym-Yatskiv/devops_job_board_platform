const request = require('supertest');
const app = require('./index');

describe('Identity Service', () => {
  it('GET /api/health повертає статус 200', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
  });

  it('POST /api/auth/login успішно авторизує', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ username: 'testuser', password: 'password123' });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});