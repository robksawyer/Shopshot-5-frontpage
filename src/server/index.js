require('babel-core/register');
['.css', '.less', '.sass', '.scss', '.ttf', '.woff', '.woff2'].forEach((ext) => require.extensions[ext] = () => {});
require('babel-polyfill');
global.navigator = {
  navigator: 'all'
};
global.window = {
	addEventListener: () => {}
}
global.i18n = () => {}
global.fetch = require('node-fetch');

// Load Keystone JS (Administration)
require('./keystone.js');
