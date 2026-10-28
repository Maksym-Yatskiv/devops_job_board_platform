const router = require('express').Router();

router.get('/health', (req, res) => res.status(200).json({ status: 'ok', service: 'catalog' }));

router.get('/jobs', (req, res) => {
    res.status(200).json([
        { id: 1, title: 'DevOps Engineer', company: 'TechCorp' },
        { id: 2, title: 'Backend Developer', company: 'SoftSys' }
    ]);
});

module.exports = router;