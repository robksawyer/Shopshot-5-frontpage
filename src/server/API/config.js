/**
 * API Configuration
 */

// Allows request to backend API from same server.
import cors from './helpers/cors';

import unless from './helpers/unless';

// API Middleware
import middleware from './middleware';

// API Routes
import apiRoutes from './routes';

const apiConfig = (app, keystone) => {

  // Pass your keystone instance to the module
  var restful = require('restful-keystone')(keystone, {
  	root: '/api/' + process.env.API_VERSION
  });

  // Use app here like you would in Express
  // Set up Restful routes
	restful.expose({
			User: {
				methods: ['retrieve', 'list', 'create', 'update', 'remove'],
				show : ['_id', 'name', 'isAdmin']
			}
		});

	restful.before({
		User: {
			update: [],
			remove: [ middleware.requireAdmin ],
			create: [],
			list: [],
			retrieve: []
		}
	});

  apiRoutes(app);

	// Set the CORS so that same domain requests are allowed.
	app.use(cors);

	// Start the Restful API
	restful.start();

	// Check to make sure an API call didn't happen
	app.use(unless('/api'));
};

export default apiConfig;
