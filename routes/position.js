const express = require('express');
const router = express.Router();
const contoller = require('../controllers/positon');

router.get('/:categoryId', contoller.getByCategoryId);
router.post('/', contoller.create);
router.patch('/:id', contoller.update);
router.delete('/:id', contoller.remove);

module.exports = router;
