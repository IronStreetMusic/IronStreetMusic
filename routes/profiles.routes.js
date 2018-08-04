
const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile.controller');

const authMiddleware = require('../middlewares/auth.middleware.js')

router.get('/', authMiddleware.authenticateUser, profileController.create);

router.get('/id/delete', profileController.warnUser)
router.post('/:id/delete', profileController.delete)

// router.get(
//     '/update',
//     authMiddleware.authenticateUser,
//     profileController.update
//   );
  
//   router.post(
//     '/:id/update',
//     authMiddleware.authenticateUser,
//     profileController.doUpdate
//   );
  
//   router.post(
//     '/:id/delete',
//     authMiddleware.authenticateUser,
//     profileController.delete
//   );
  


// router.get(
//     '/',
//     authMiddleware.authenticateUser,
//     profileControllerController.list
// );

module.exports = router;