const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/health', (req, res) => res.status(200).json({ status: 'ok', service: 'identity' }));

app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    return res.status(200).json({ token: 'mock-jwt-token' });
  }
  return res.status(400).json({ error: 'Missing credentials' });
});

module.exports = app;