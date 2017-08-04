// Webpack 1.0 config
// To visit your app, navigate to http://localhost:8080.
'use strict';

const path = require('path');

/**
 * @see https://github.com/webpack-contrib/sass-loader
 */
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const extractSass = new ExtractTextPlugin({
//   filename: path.resolve(__dirname, 'src', 'client', 'public', 'styles') + '[name].css',
//   disable: process.env.NODE_ENV === 'development'
// });

module.exports = {
  entry: {
    bundle: ['./src/client/client.js'],
    // vendors: ['./src/client/public/styles/site.scss']
  },
  output: {
    path: path.resolve(__dirname, 'src', 'client', 'public', 'js'),
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        // test: '/(.js$|.jsx$)/',
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: '/\.css$/',
        exclude: /node_modules/,
        use:[{
         loader: 'postcss-loader',
         options: {
           plugins: function () {
             return [
               require('autoprefixer')
             ];
           }
         }
        }, {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }, {
          // use style-loader in development
          loader: 'style-loader'
        }]
      },
      // {
      //   test: /\.scss$/,
      //   exclude: /node_modules/,
      //   use: extractSass.extract({
      //     use: [{
      //       loader: 'css-loader'
      //     }, {
      //       loader: 'sass-loader'
      //     }, {
      //       // use style-loader in development
      //       loader: 'style-loader'
      //     }]
      //   })
      // },
    ]
  },
  plugins: [
    // extractSass
  ]
};
