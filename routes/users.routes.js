
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

router.get('/signup', usersController.create);
router.post('/signup', usersController.doCreate)

module.exports = router;
 