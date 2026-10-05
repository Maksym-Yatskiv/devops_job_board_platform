const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/health', (req, res) => res.status(200).json({ status: 'ok', service: 'application' }));

app.post('/api/applications', (req, res) => {
  const { jobId, resumeLink } = req.body;
  if (!jobId || !resumeLink) {
    return res.status(400).json({ error: 'Invalid data' });
  }
  res.status(201).json({ message: 'Application submitted', applicationId: 101 });
});

module.exports = app;