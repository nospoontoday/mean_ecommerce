const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = (function(){
	return {
		show: function(request, response){
			response.json({"HI": "WORLD"});
		},

		get: function(request, response) {
			Product.find({}).then((products) => {
				response.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
				response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
				return response.json(products);
			});
			//database process here
			// response.json({"HELLO": "WORLD"});
		}
	}
})();