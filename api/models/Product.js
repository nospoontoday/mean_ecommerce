const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    photo: {type: String, required: true},
    quantity: {type: Number, required: true},
    price: {type: Number, required: true},
    created_at: {type: Date, default: new Date},
    updated_at: {type: Date, default: new Date}
});

const Product = mongoose.model('Product', productSchema);

// initial data
const productData = [
    {
        name: "Earthen Bottle",
        description: "Enim pariatur ad proident adipisicing est eu exercitation ad consectetur quis.",
        photo: "1",
        quantity: 100,
        price: 48
    },
    {
        name: "Nomad Tumbler",
        description: "Enim pariatur ad proident adipisicing est eu exercitation ad consectetur quis.",
        photo: "2",
        quantity: 100,
        price: 35        
    },
    {
        name: "Focus Paper Refill",
        description: "Enim pariatur ad proident adipisicing est eu exercitation ad consectetur quis.",
        photo: "3",
        quantity: 100,
        price: 39        
    },
    {
        name: "Machined Mechanical Pencil",
        description: "Enim pariatur ad proident adipisicing est eu exercitation ad consectetur quis.",
        photo: "4",
        quantity: 100,
        price: 35        
    }
];

mongoose.connection.dropCollection('products', function(err){
    if ( err ) {
        if (err.code === 26)  console.log('-- products collection does not exists');
        else throw err;
    }
    else console.log( "-- products collection dropped" );

    /* insert products */
    Product.create( productData, function (err, products) {
        if ( err ) throw err;
        console.log( products + '\n-- products inserted successfully' );
    });
});