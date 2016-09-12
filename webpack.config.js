var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var AssetsPlugin = require('assets-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'client');

var config = {
    entry: {
        home_app: ['babel-polyfill', APP_DIR + '/js/home/home_app.jsx']
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].[hash].js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            include: APP_DIR,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
            }
        }, {
            test: /bootstrap\/js\//,
            loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192&name=[name].[ext]'
        }, {
            test: /\.(less|css)$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file-loader"
        }, {
            test: /\.(woff|woff2)$/,
            loader: "url-loader?prefix=font/&limit=5000"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url-loader?limit=10000&mimetype=application/octet-stream"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url-loader?limit=10000&mimetype=image/svg+xml"
        }]
    },
    plugins: [
        new ExtractTextPlugin("[name].[hash].css"),
        new AssetsPlugin({path: BUILD_DIR})
    ]
};

module.exports = config;
