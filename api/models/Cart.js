const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const cartSchema = new mongoose.Schema({
    session_id: {type: String, required: true },
    products: [{
        product_id: {type: Schema.Types.ObjectId, ref: 'Product'},
        price: {type: Number, require: true},
        quantity: {type: Number, required: true},
        name: {type: String, required: true}
    }],
    status: {type: String, required: true, default: 'active'}
});

const Cart = mongoose.model('Cart', cartSchema);