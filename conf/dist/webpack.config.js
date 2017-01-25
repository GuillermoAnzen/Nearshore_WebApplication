var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('../webpack.conf');
const pkg = require('../../package.json');
var webpack = require('webpack-stream');

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
    })
];
config.module = {
    loaders: [{
            test: /.html$/,
            loaders: [
                'html'
            ]
        },
        {
            test: /\.less$/,
            loader: "style!css!less"
        },
        {
            test: /\.scss$/,
            loader: "style!css!sass"
        }
    ]
};

module.exports = config;