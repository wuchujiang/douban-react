var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var pxtorem = require('postcss-pxtorem');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'client');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

var webpackConfig = {
    entry: { app: path.resolve(APP_PATH, 'path.js') },
    output: { path: BUILD_PATH, filename: "bundle.js" },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, loader: "style!css!postcss" },
            { test: /\.scss$/, loader: "style!css!sass!postcss" },
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192', exclude: /node_modules/ }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['', '.web.js', '.js', '.json', '.jsx'],
        root: [path.resolve('client'), path.resolve('assets'), __dirname]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("style.css")
    ],
    babel: {
        presets: ["es2015", "react"],
        plugins: [
            ['import', { libraryName: 'antd-mobile', style: 'css' }]
        ]
    },
    postcss: [
        pxtorem({
            rootValue: 100,
            propWhiteList: []
        })
    ]

};

module.exports = webpackConfig;