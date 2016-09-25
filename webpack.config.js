'use strict';

var path = require('path');
var autoPrefixer = require('autoprefixer');
var webpack = require('webpack');
var env = process.env.NODE_ENV || 'production';
var production = env === 'production';
var devTool = 'inline-source-map';
var entry = ['./src/index.js'];
var jsQuery = {};

var plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(env)
        }
    })
];
var host = 'localhost';

if (production) {
    devTool = 'cheap-module-source-map';
    plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
} else {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    entry.unshift('webpack/hot/only-dev-server');
    entry.unshift('webpack-dev-server/client?http://' + host + ':5000');

    jsQuery = {
        presets: ["react-hmre"]
    };
}

module.exports = {
    context: __dirname,
    plugins: plugins,
    devtool: devTool,
    entry: entry,

    output: {
        publicPath: './dist/',
        filename: 'main.bundle.js',
        chunkFilename: 'chunk-[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.js$|\.jsx$/,
                exclude: ['node_modules/', /\.spec.js$/, /\.story.jsx$/],
                include: [
                    path.join(__dirname)
                ],
                loader: 'babel',
                query: jsQuery
            },
            {
                test: /\.sass|\.scss$/,
                loaders: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
            },

            {
                test: /\.png|\.svg|\.ttf|\.woff2|\.woff|\.eot|\.json/,
                loader: require.resolve("file-loader")
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.es6', '.scss', '.css']
    },

    postcss: function () {
        return [autoPrefixer({
            browsers: ['last 2 versions']
        })];
    }
};
