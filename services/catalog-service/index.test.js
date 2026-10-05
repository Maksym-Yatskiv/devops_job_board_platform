const request = require('supertest');
const app = require('./index');

describe('Catalog Service', () => {
  it('GET /api/health повертає статус 200', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
  });

  it('GET /api/jobs повертає список вакансій', async () => {
    const res = await request(app).get('/api/jobs');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBe(2);
  });
});