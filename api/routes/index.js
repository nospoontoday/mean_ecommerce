// This is where we put all our routes
module.exports = function(app){
	app.use('/api/v1/products', require('./products.js'));
	// app.get('/logout', function(req, res){
	// 	//destroys coins auth_token as well
	// 	req.logout();
	// 	req.session.destroy();
	// 	res.redirect('/');
	// });
	// app.use('/products', require('./products.js'));
}
