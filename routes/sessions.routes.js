const express = require('express');
const router = express.Router();
const signinController = require('../controllers/signin.controller');

router.get('/', signinController.login);
