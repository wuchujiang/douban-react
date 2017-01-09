var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'client');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    entry: { app: path.resolve(APP_PATH, 'app.js') },
    output: { path: BUILD_PATH, filename: "bundle.js" },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loader: "style!css!sass" },
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192', exclude: /node_modules/ }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("style.css")
    ]
};