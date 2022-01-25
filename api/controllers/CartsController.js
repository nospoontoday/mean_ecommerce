const mongoose = require('mongoose');
const Cart = mongoose.model('Cart');
const Product = mongoose.model('Product');

module.exports = (function(){
	return {
		post: async function(request, response){
            // make sure the product exists.
            // @TODO: Supply findOne with request.body.productId
            let product = await Product.findOne({}).exec();
            // console.log(product);

            if( product == null || ! product._id instanceof mongoose.Types.ObjectId) {
                return response.json({"error": "Product does not exist"});
            }

            // make sure product.quantity > customer's desired quantity
            if ( product.quantity < request.body.quantity) {
                return response.json({"error": "We only have " + product.quantity + " left for the product " + product.name});
            }

            // @TODO: Supply findByIdAndUpdate with request.body.cartId
            Cart.findByIdAndUpdate({_id: "5db6b26730f133b65dbbe459"}, { 
                $push:
                {
                    "products":
                    {
                        product_id: product._id, 
                        quantity: request.body.quantity,
                        name: request.body.productName,
                        price: request.body.productPrice
                    }
                }
            }, 
            { new: true, setDefaultsOnInsert: true }, 
            function(err){
                if(err){
                    console.log(err);
                    // response.status(400).json({errors: [err]});
                } else {
                    console.log("success");
                }
            });

			return response.json({"message": "Item successfully added to cart!"});
		},

		get: function(request, response) {
			Product.find({}).then((products) => {
				response.send(products);
			});
		}
	}
})();