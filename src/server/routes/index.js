/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

// Express stuff
import expressHelmet from 'helmet'
import compression from 'compression'
import path from 'path'
import fs from 'fs'
import cookieParser from 'cookie-parser'

// Keystone stuff
import keystone from 'keystone';
import middleware from './middleware';

// React stuff
import React from 'react'
import {render} from 'rapscallion'
import Helmet from 'react-helmet'
import {StaticRouter} from 'react-router'
import {ServerStyleSheet, StyleSheetManager} from 'styled-components'

// Application
import {configureStore, configureRootComponent} from '../../client/common'
import {JWT_TOKEN} from '../../client/common/api'

// Config
import apiConfig from '../API/config';

// Setup Route Bindings
exports = module.exports = function (app) {

  const language = process.env.APP_LANGUAGE || 'en';
  // here must be path to dir
  const distPath = `../../../dist/${language}`;

  // read index.html and assign a variable
  const indexPath = path.join(__dirname, `${distPath}/index.html`);

  const indexHTMLFileContent = (function () {
    try {
      return fs.readFileSync(indexPath, 'utf8')
    } catch (e) {
      throw new Error(`Are you sure you have already built app? ${e}`)
    }
  })();

	function handleRender (req, res) {
		// Auth stuff
		const {cookies} = req;
		const token = cookies[JWT_TOKEN]
		//
		//
		// HERE SHOULD BE CHECK THAT TOKEN IS VALID
		//
		//
		const isTokenValid = true
		const initialState = isTokenValid
			? {me: {auth: {token, isLoggedIn: true}}}
			: {}
		//
		const sheet = new ServerStyleSheet()
		const context = {}
		const store = configureStore(initialState)
		const RootComponent = configureRootComponent(store)
		const App = (
			<StyleSheetManager sheet={sheet.instance}>
				<StaticRouter url={req.url} context={context}>
					{RootComponent}
				</StaticRouter>
			</StyleSheetManager>
		)
		//
		const css = sheet.getStyleTags()
		const preloadedState = store.getState()
		render(App).toPromise().then(html => {
			res.send(renderFullPage({html, css, preloadedState}))
		})
	}

	function renderFullPage ({html, css, preloadedState}) {
		// console.log(indexHTMLFileContent)
		const indexHTMLFileContentWithRedux = indexHTMLFileContent.replace(
			'<div id="app"></div>',
			`<div id="app">${html}</div><script>
			window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
				/</g,
				'\\u003c'
			)}
			</script><span style="display:none;">Server-side rendering!</span>`
		)
		const indexHTMLFileContentWithStylesAndRedux = indexHTMLFileContentWithRedux.replace(
			'<meta name="ssr-styles"/>',
			css
		)
		return indexHTMLFileContentWithStylesAndRedux
	}

	// add express stuff
  app.use(compression())
  app.use(cookieParser())
  app.disable('x-powered-by')

  app.use(expressHelmet());

  // add handler for non-static requests
  app.get('*', handleRender);

  // Load and setup the API config
	apiConfig(app, keystone);

	// Error middleware
	app.use((error, req, res, next) => {
		res.status(error.status).send({
			message: error.message,
			success: false,
		});
	});
};
