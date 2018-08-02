
const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events.controllers');
const authMiddleware = require('../middlewares/auth.middleware.js');

router.get('/create', authMiddleware.authenticateUser, eventsController.create);

router.post(
    '/create',
    authMiddleware.authenticateUser,
    eventsController.doCreate
);

module.exports = router;
