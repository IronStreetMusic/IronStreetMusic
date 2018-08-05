const express = require('express');
const router = express.Router();
const profileuserController = require('../controllers/profileuser.controller');

const authMiddleware = require('../middlewares/auth.middleware.js')

router.get('/', authMiddleware.authenticateUser, profileuserController.create);

// router.get('/id/delete', profileController.warnUser);
// router.post('/:id/delete', profileController.delete);

// router.get('/:id/update', profileController.update);

// router.get(
//     '/',
//     authMiddleware.authenticateUser,
//     profileControllerController.list
// );

module.exports = router;