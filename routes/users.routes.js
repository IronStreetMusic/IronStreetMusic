
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');
const loginController = require('../controllers/login.controller');

router.get('/', loginController.create);
router.post('/', loginController.doCreate);
// router.post('/signup', usersController.signup);

router.get('/signup', usersController.create);
router.post('/signup', usersController.doCreate)

module.exports = router;
