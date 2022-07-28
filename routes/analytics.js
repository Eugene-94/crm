const express = require('express');
const router = express.Router();
const contoller = require('../controllers/analytics');

router.get('/overview', contoller.overview);
router.get('/analytics', contoller.analytics);

module.exports = router;
