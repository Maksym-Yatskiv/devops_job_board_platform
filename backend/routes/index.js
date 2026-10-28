const router = require('express').Router();

router.use('/identity', require('./identityRouter'));
router.use('/catalog', require('./catalogRouter'));
router.use('/applications', require('./applicationRouter'));

module.exports = router;