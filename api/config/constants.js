module.exports = function(){
	switch(process.env.NODE_ENV){
		case 'dev':
			return {
				'redisPort': 6379,
				'redisHost': '127.0.0.1',
				'redisPassword': '',
				'mongodbHost': 'mongodb://localhost/kwits',
				'port': 8080
			}
		case 'production':
			return {
				'redisPort': 0,
				'redisHost': '',
				'redisPassword': '',
				'mongodbHost': '',
				'port': 0
			}
	}
}