const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/user', userController.users);
router.post('/user', userController.create);
router.get('/user/:id?', userController.getById);

module.exports = router;