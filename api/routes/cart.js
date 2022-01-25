var express = require('express');
var cartsController = require('../controllers/CartsController.js');
var router = express.Router();
var redirectIfAuthenticated = require('../middleware/redirectIfAuthenticated.js');

router.route('/create-or-update')
    .post(redirectIfAuthenticated, function(request, response){
		  cartsController.post(request, response);
    });

// temp route for POSTman
router.route('/form')
    .get(redirectIfAuthenticated, function(request, response){
      // cartsController.get(request, response);
      response.send({"csrfToken": request.csrfToken()});
      // console.log('csrfToken: ' + request.csrfToken());
    });

module.exports = router;