const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../webpack.conf');
const pkg = require('../../package.json');
const webpack = require('webpack-stream');
const webpackPlugin = require('webpack');

config.context = __dirname + '';
config.entry = {
    app: "../../src/app.js",
    vendor: Object.keys(pkg.dependencies)
};
config.output = {
    filename: 'js/[name]-[chunkhash].js'
};
config.plugins = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: '../../src/index.html'
    }),
    new webpack.webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new webpack.webpack.optimize.UglifyJsPlugin({
        compress: { unused: true, dead_code: true, warnings: false },
        mangle: false
    }),
    new webpackPlugin.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
];

module.exports = config;