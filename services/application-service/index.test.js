const request = require('supertest');
const app = require('./index');

describe('Application Service', () => {
  it('GET /api/health повертає статус 200', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
  });

  it('POST /api/applications створює відгук', async () => {
    const res = await request(app)
      .post('/api/applications')
      .send({ jobId: 1, resumeLink: 'https://link.to/resume' });
    expect(res.statusCode).toBe(201);
    expect(res.body.applicationId).toBe(101);
  });
});