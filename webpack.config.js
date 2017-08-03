// Webpack 1.0 config
// To visit your app, navigate to http://localhost:8080.
'use strict';

const path = require('path');

module.exports = {
  entry: {
    app: ['./src/client/client.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.js.map',
  },
  // externals: {
  //   jquery: 'jQuery',
  //   lodash: '_',
  // },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // devtool: 'source-map',
  // cache: true,
  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: '/\.css$/',
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
  },
  // plugins: [ ]
};
