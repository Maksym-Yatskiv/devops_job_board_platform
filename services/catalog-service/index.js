const express = require('express');
const app = express();

app.get('/api/health', (req, res) => res.status(200).json({ status: 'ok', service: 'catalog' }));

app.get('/api/jobs', (req, res) => {
  res.status(200).json([
    { id: 1, title: 'DevOps Engineer', company: 'TechCorp' },
    { id: 2, title: 'Backend Developer', company: 'SoftSys' }
  ]);
});

module.exports = app;