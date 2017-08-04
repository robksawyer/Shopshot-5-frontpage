require('babel-core/register');
['.css', '.less', '.sass', '.scss', '.ttf', '.woff', '.woff2'].forEach((ext) => require.extensions[ext] = () => {});
require('babel-polyfill');
require('./src/server/keystone.js');
global.navigator = { navigator: 'all' };
