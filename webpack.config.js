const webpack = require('webpack'); //to access built-in plugins
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const config = {
  target: 'node',
  context: __dirname,
  externals: [nodeExternals()],
  devtool: 'source-map',
  entry: ['babel-polyfill', path.resolve(__dirname, 'src/index.js')],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
};

module.exports = config;