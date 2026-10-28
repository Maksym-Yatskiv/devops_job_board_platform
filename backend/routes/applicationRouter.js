const router = require('express').Router();

router.get('/health', (req, res) => res.status(200).json({ status: 'ok', service: 'application' }));

router.post('/', (req, res) => {
    const { jobId, resumeLink } = req.body;
    if (!jobId || !resumeLink) {
        return res.status(400).json({ error: 'Invalid data' });
    }
    return res.status(201).json({ message: 'Application submitted', applicationId: 101 });
});

module.exports = router;