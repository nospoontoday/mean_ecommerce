module.exports = function redirectIfAuthenticated(req, res, next){
	// console.log('authenticated: ' + req.isAuthenticated());
    var is_authenticated = false;
    
	if(is_authenticated === true)
		res.redirect('/dashboard');
	else
    	next();
}