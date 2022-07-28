const express = require('express');
const router = express.Router();
const contoller = require('../controllers/category');

router.get('/', contoller.getAll);
router.get('/:id', contoller.getById);
router.delete('/:id', contoller.remove);
router.post('/', contoller.create);
router.patch('/:id', contoller.update);

module.exports = router;
