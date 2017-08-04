// Webpack 1.0 config
// To visit your app, navigate to http://localhost:8080.
'use strict';

const path = require('path');

module.exports = {
  entry: {
    app: ['./src/client/client.js']
  },
  output: {
    path: path.resolve(__dirname, 'src', 'server', 'public', 'js'),
    filename: 'bundle.js',
    // sourceMapFilename: 'bundle.js.map',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        // test: '/.js$|.jsx$/',
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: '/\.css$/',
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
           loader: 'postcss-loader',
           options: {
             plugins: function () {
               return [
                 require('autoprefixer')
               ];
             }
           }
         }
        ]
      }
    ]
  }
};
