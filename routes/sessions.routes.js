
const express = require('express');
const router = express.Router();
const sessionsController = require('../controllers/sessions.controller');

const authMiddleware = require('../middlewares/auth.middleware.js')

router.get('/', sessionsController.create);
router.post('/', authMiddleware.userNotAuthenticated, sessionsController.doCreate);
// router.post('/signup', usersController.signup);

module.exports = router;