'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var ENV = process.env.npm_lifecycle_event;
var webpackEnv = require('webpack-env');
var isProd = ENV === 'build';
var sassPaths = require('node-neat').includePaths.map(function (sassPath) {
  return 'includePaths[]=' + sassPath;
}).join('&');

process.env.BABEL_ENV = isProd ? 'production' : 'development';
module.exports = (function makeWebpackConfig () {
  var config = {};
  config.entry = {
    fetch: 'whatwg-fetch',
    app: './src/app/app.js'
  };

  config.output = {
    path: path.resolve(__dirname, './www'),
    publicPath: isProd ? '/' : 'http://localhost:8080/',
    filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
    chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js'
  };

  if (isProd) {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'eval-source-map';
  }

  config.resolve = {
    modulesDirectories: [
      'node_modules',
      'src/public/views',
      'src/data'
    ]
  };

  config.module = {
    preLoaders: [],
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass?' + sassPaths]
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file'
    }, {
      test: /\.html$/,
      loader: 'html',
      exclude: /index\.html/
    }, {
      test: /\.yaml$/,
      include: path.resolve(__dirname, './src/data'),
      loaders: ['json', 'yaml']
    }]
  };

  config.plugins = [webpackEnv];

  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './src/public/views/index.html',
      inject: 'body'
    })
  );

  if (isProd) {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': '"production"'
        }
      }),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new CopyWebpackPlugin([{
        from: path.resolve(__dirname, './src/public')
      }], { ignore: ['*.html'] })
    );
  }

  config.devServer = {
    contentBase: './src/public',
    stats: 'minimal',
    historyApiFallback: true
  };

  return config;
}());

