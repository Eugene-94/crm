const express = require('express');
const router = express.Router();
const contoller = require('../controllers/auth');

router.get('/login', contoller.login);
router.get('/register', contoller.register);

module.exports = router;
