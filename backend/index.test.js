const request = require('supertest');
const app = require('./index');

describe('API Tests', () => {
    
    describe('Identity Service', () => {
        it('GET /api/identity/health повертає статус 200', async () => {
            const res = await request(app).get('/api/identity/health');
            expect(res.statusCode).toBe(200);
        });

        it('POST /api/identity/login успішно авторизує', async () => {
            const res = await request(app)
                .post('/api/identity/login')
                .send({ username: 'testuser', password: 'password123' });
            expect(res.statusCode).toBe(200);
            expect(res.body.token).toBeDefined();
        });
    });

    describe('Catalog Service', () => {
        it('GET /api/catalog/health повертає статус 200', async () => {
            const res = await request(app).get('/api/catalog/health');
            expect(res.statusCode).toBe(200);
        });

        it('GET /api/catalog/jobs повертає список вакансій', async () => {
            const res = await request(app).get('/api/catalog/jobs');
            expect(res.statusCode).toBe(200);
            expect(Array.isArray(res.body)).toBeTruthy();
            expect(res.body.length).toBe(2);
        });
    });

    describe('Application Service', () => {
        it('GET /api/applications/health повертає статус 200', async () => {
            const res = await request(app).get('/api/applications/health');
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
});