const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = (function(){
	return {
		show: function(request, response){
			response.json({"HI": "WORLD"});
		},

		get: function(request, response) {
			Product.find({}).then((products) => {
				response.send(products);
			});
			//database process here
			// response.json({"HELLO": "WORLD"});
		}
	}
})();