/**
 * This file contains the common middleware used by your routes.
 *
 * Extend or replace these functions as your application requires.
 *
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */
var _ = require('lodash');

/**
	Initialises the standard view locals

	The included layout depends on the navLinks array to generate
	the navigation in the header, you may wish to change this array
	or replace it with your own templates / logic.
*/
exports.initLocals = function (req, res, next) {
	res.locals.user = req.user;
	// though you might prefer to clone this instead of setting them equal
	res.locals.env = process.env;
	res.locals.page = {
		path: req.url.split('?')[0]
	};
	res.locals.year = new Date().getFullYear();
	res.locals.messages = {
		info: [],
		success: [],
		warning: [],
		error: []
	};
	res.locals.api = {
		clientId: process.env.TEMPO_CLIENT_ID,
		clientSecret: process.env.TEMPO_CLIENT_SECRET
	};
	next();
};

/**
	Inits the error handler functions into `res`
*/
exports.initErrorHandlers = function(req, res, next) {
	res.err = function(err, title, message) {
		res.status(500).render('errors/500', {
			err: err,
			errorTitle: title,
			errorMsg: message
		});
	}
	res.notfound = function(title, message) {
		res.status(404).render('errors/404', {
			errorTitle: title,
			errorMsg: message
		});
	}
	next();
};


/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error'),
	};
	res.locals.messages = _.some(flashMessages, function (msgs) { return msgs.length; }) ? flashMessages : false;
	next();
};

/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/signin');
	} else {
		next();
	}
};

/**
	Prevents people from accessing protected pages when they're not admin
 */
exports.requireAdmin = function(req, res, next) {
	if(!req.user.isAdmin) {
		req.flash('error', 'You do not have the proper permissions to access this page.');
		res.redirect('/signin');
	} else {
		next();
	}
};
