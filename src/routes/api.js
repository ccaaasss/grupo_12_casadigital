const express = require('express');
const router = express.Router();
const usersAPIController = require('../controllers/api/usersAPIController');
const coursesAPIController = require('../controllers/api/coursesAPIController');

router.get('/users', usersAPIController.list);
router.get('/users/:id', usersAPIController.detail);
router.get('/courses', coursesAPIController.list);
router.get('/courses/:id', coursesAPIController.detail);



module.exports = router;