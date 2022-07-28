const express = require('express');
const router = express.Router();
const contoller = require('../controllers/auth');

router.post('/login', contoller.login);
router.post('/register', contoller.register);

module.exports = router;
