'use strict'
const path = require('path')

module.exports = {
	port: process.env.PORT || 3000,
	title: 'Keystone React Template',
	publicPath: '/' ,
	srcPath: path.join(__dirname, '../src'),
	srcCommonPath: path.join(__dirname, '../src/client/common'),
	distPath: path.join(__dirname, '../dist'),
	// your app's manifest.json
	manifest: {
		name: 'Keystone React Template',
		short_name: 'KRT',
		description: 'https://github.com/robksawyer/keystone-react-template-mern',
		icons: [
	    {
	      "src": "icons/android-chrome-36x36.png",
	      "sizes": "36x36",
	      "type": "image/png"
	    },
	    {
	      "src": "icons/android-chrome-48x48.png",
	      "sizes": "48x48",
	      "type": "image/png"
	    },
	    {
	      "src": "icons/android-chrome-72x72.png",
	      "sizes": "72x72",
	      "type": "image/png"
	    },
	    {
	      "src": "icons/android-chrome-96x96.png",
	      "sizes": "96x96",
	      "type": "image/png"
	    },
	    {
	      "src": "icons/android-chrome-144x144.png",
	      "sizes": "144x144",
	      "type": "image/png"
	    },
	    {
	      "src": "icons/android-chrome-192x192.png",
	      "sizes": "192x192",
	      "type": "image/png"
	    },
	    {
	      "src": "icons/android-chrome-256x256.png",
	      "sizes": "256x256",
	      "type": "image/png"
	    },
	    {
	      "src": "icons/android-chrome-384x384.png",
	      "sizes": "384x384",
	      "type": "image/png"
	    },
	    {
	      "src": "icons/android-chrome-512x512.png",
	      "sizes": "512x512",
	      "type": "image/png"
	    }
	  ],
		start_url: '.',
		display: 'standalone',
		background_color: '#f7f7f7',
		theme_color: '#009688'
	}
}
