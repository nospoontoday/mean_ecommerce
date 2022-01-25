'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const session = require('express-session');
const csrf = require('csurf');
const morgan   = require('morgan');                // log requests to the console (express4)
// var Config = require('./app/config/config.js');
const Constants = require('./config/constants.js');
// var conf =  new Config();
const constants = new Constants();
const app = express();

app.use('/static', express.static(__dirname + '/resources'));

app.use(morgan('dev'));
app.set('port', (process.env.PORT || constants.port));

// add & configure middleware
app.use(session({
    genid: (req) => {
      console.log('Inside the session middleware')
      console.log(req.sessionID)
      return uuidv4() // use UUIDs for session IDs
    },
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))

require('./config/database.js');

app.use(cookieParser('secret'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/index.js')(app); // This is the api route

app.use(csrf());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
const router = express.Router();

console.log(process.env.NODE_ENV);
const server = app.listen(app.get('port'), function(){
	console.log('Listening on port ', app.get('port'));
});