const express = require('express');
const router = express.Router();
const contoller = require('../controllers/order');

router.get('/', contoller.getAll);
router.post('/', contoller.create);

module.exports = router;
