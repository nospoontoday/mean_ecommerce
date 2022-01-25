var mongoose = require('mongoose');
var fs = require('fs');
var Constants = require('./constants.js');
var constants = new Constants();

mongoose.connect(constants.mongodbHost);
mongoose.connection.on('error', function(error){ console.log(error); });

var models_path = __dirname + '/../models';

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0){
		require(models_path + '/' + file);
	}
});