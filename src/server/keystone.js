// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config({ path: __dirname + '/config/.env' });

// Initialise New Relic if an app name and license key exists
if (process.env.NODE_ENV === 'production'){
	if(process.env.NEW_RELIC_APP_NAME && process.env.NEW_RELIC_LICENSE_KEY) {
		require('newrelic');
	}
}

// Require keystone
var keystone = require('keystone');
var pkg = require('../../package.json');

// Handle finding the right database to use.
// Builds a database based on the name in package.json.
// Warning: You shouldn't have any spaces or weird characters in the name.
var mongoUrl = process.env.MONGO_URI;
if(process.env.NODE_ENV === 'development') {
	if(process.env.USE_LIVE_DB !== 'true') {
		console.log("App is using the LOCAL Mongo database.");
		mongoUrl = 'mongodb://localhost/' + pkg.name;
	}
}

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({

	'name': 'keystone-react-template',
	'brand': 'Keystone React Template',

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
	'cookie secret': process.env.COOKIE_SECRET,
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


if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
	console.log('----------------------------------------'
	+ '\nWARNING: MISSING MAILGUN CREDENTIALS'
	+ '\n----------------------------------------'
	+ '\nYou have opted into email sending but have not provided'
	+ '\nmailgun credentials. Attempts to send will fail.'
	+ '\n\nCreate a mailgun account and add the credentials to the .env file to'
	+ '\nset up your mailgun integration');
}

// Configure Cloudinary
keystone.set('cloudinary config', process.env.CLOUDINARY_URL );
// optional, will prefix all built-in tags with 'keystone_'
keystone.set('cloudinary prefix', '');
// optional, will prefix each image public_id with [{prefix}]/{list.path}/{field.path}/
keystone.set('cloudinary folders', true);
// optional, will force cloudinary to serve images over https
keystone.set('cloudinary secure', true);


// Setup common locals for your emails. The following are required by Keystone's
// default email templates, you may remove them if you're using your own.
keystone.set('email locals', {
	logo_src: '/images/logo-email.gif',
	logo_width: 194,
	logo_height: 76,
	theme: {
		email_bg: '#f9f9f9',
		link_color: '#2697de',
		buttons: {
			color: '#fff',
			background_color: '#2697de',
			border_color: '#1a7cb7'
		}
	}
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
