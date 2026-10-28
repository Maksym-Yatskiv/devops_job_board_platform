const router = require('express').Router();

router.get('/health', (req, res) => res.status(200).json({ status: 'ok', service: 'identity' }));

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        return res.status(200).json({ token: 'mock-jwt-token' });
    }
    return res.status(400).json({ error: 'Missing credentials' });
});

module.exports = router;