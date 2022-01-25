const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const cartSchema = new mongoose.Schema({
    product_ids: [{type: Schema.Types.ObjectId, ref: 'Product'}],
    status: {type: String, required: true, default: 'active'},
    quantity: {type: Number, required: true},
    total: {type: Number, require: true},
});

const Cart = mongoose.model('Cart', cartSchema);