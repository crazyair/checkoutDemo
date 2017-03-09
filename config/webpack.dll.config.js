const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const rimrafSync = require('rimraf').sync;
const path = require('path');
const fs = require('fs-extra');
const dependencies = require('../package.json').dependencies;
const vendors = Object.keys(dependencies);
// 先删除 lib  所有文件
rimrafSync('./lib/');
//把 dependencies  写入 dependencies.json 中 为build做判断 是否需要先执行 npm run lib
fs.ensureDir('./lib/', function () {
    fs.writeJson('./lib/dependencies.json', dependencies);
});

module.exports = {
    devtool: false,
    output: {
        path: 'lib',
        filename: '[name].[hash:8].js',
        library: '[name]',
    },
    entry: {
        "lib": vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'lib/manifest.json',
            name: '[name].[hash:8]',
            context: path.join(__dirname, '/../'),
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true, // React doesn't support IE8
                warnings: false
            },
            mangle: {
                screw_ie8: true
            },
            output: {
                comments: false,
                screw_ie8: true
            }
        }),
        new ProgressBarPlugin(require('./progress')),
    ],
};