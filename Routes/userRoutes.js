const express = require('express');
const { route } = require('express/lib/router');
const userController = require('./../controllers/userControllers');

const router = express.Router();

router.route('/').get(userController.getUsers);

router.route('/oneuser/:Username').get(userController.getUser);

router.route('/signup').post(userController.signup);

router.route('/login').post(userController.login);

module.exports = router;
