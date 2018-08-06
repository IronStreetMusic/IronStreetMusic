
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

router.get(
    '/:id/update',
    authMiddleware.authenticateUser,
    eventsController.update
);

router.post(
    '/:id/update',
    authMiddleware.authenticateUser,
    eventsController.doUpdate
);

module.exports = router;
