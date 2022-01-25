var express = require('express');
var productsController = require('../controllers/ProductsController.js');
var router = express.Router();
var redirectIfAuthenticated = require('../middleware/redirectIfAuthenticated.js');

router.route('/')
    .get(redirectIfAuthenticated, function(request, response){
		productsController.get(request, response);
    });

router.route('/:id(\\d+)')
    .get(redirectIfAuthenticated, function(request, response){
		productsController.show(request, response);
    });


module.exports = router;