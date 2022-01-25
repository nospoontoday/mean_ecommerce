var express = require('express');
var homeController = require('../controllers/HomeController.js');
var router = express.Router();
var redirectIfAuthenticated = require('../middleware/redirectIfAuthenticated.js');

router.route('/')
    .get(redirectIfAuthenticated, function(request, response){
		  homeController.get(request, response);
    });


module.exports = router;