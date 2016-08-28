var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'client');

var config = {
  entry: {
    home: APP_DIR + '/js/home/home.jsx'
    },
  output: {
    path: BUILD_DIR,
    filename: 'app/[name]/[name].js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel',
        query: {
          presets: ['es2015', 'react'],
        }
      },
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      {test: /\.less$/,loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")}
    ]
  },
  plugins: [
      new ExtractTextPlugin("style/[name]/[name].css")
  ]
};

module.exports = config;
