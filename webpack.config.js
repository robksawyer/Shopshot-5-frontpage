// Webpack 1.0 config
// To visit your app, navigate to http://localhost:8080.

const path = require('path');

module.exports = {
  entry: {
    app: ["./src/client/client.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
  	extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        },
      }
    ]
  },
};
