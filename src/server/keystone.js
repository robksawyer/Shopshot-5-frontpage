// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config('./config');

// Initialise New Relic if an app name and license key exists
if (process.env.NODE_ENV === 'production'){
	if(process.env.NEW_RELIC_APP_NAME && process.env.NEW_RELIC_LICENSE_KEY) {
		require('newrelic');
	}
}

// Require keystone
var keystone = require('keystone');
var pkg = require('./package.json');

// Handle finding the right database to use.
// Builds a database based on the name in package.json.
// Warning: You shouldn't have any spaces or weird characters in the name.
var mongoUrl = process.env.MONGO_URI;
if(process.env.NODE_ENV === 'local') {
	if(process.env.USE_LIVE_DB === 'true') {
		mongoUrl = process.env.MONGO_URI;
	} else {
		mongoUrl = 'mongodb://localhost/' + pkg.name;
	}
}

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({

	'name': 'keystone-react-template',
	'brand': 'Keystone React Template',

	'mongo': config.MONGO_URI,

	'sass': 'public',
	'static': ['../../build', 'public'],
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'pug',

	// Handy options
	// 'emails': 'templates/emails',
	// 'admin path': 'admin',
	// 'signin logo': ['/images/logo.svg', 120],

	'mongo': mongoUrl,

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': config.COOKIE_SECRET,
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));

// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	users: 'users',
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
