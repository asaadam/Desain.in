const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const { auth } = require('../middlewares');

router.get('/updatePassword/:userId', auth, userController.updatePassword);

router.post('/createInvitation/:userInvitedId', auth, userController.createInvitation);
router.post('/acceptInvitation', auth, userController.acceptInvitation);

router.delete('/cancelInvitation', auth, userController.cancelInvitation);

module.exports = router