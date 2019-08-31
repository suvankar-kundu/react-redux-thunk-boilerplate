import path from 'path';
import webpackNodeExternals from 'webpack-node-externals'
import CopyPlugin from 'copy-webpack-plugin';
export default {
    target: 'node',
    mode: 'production',
    context: path.join(__dirname, '../src/server'),
    externals: [webpackNodeExternals({
        includeAbsolutePaths: true,
    })],
    node: {
        __dirname: false,
        __filename: false
    },
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CopyPlugin([{
            from: '../*.html',
            to: 'index.html'
        }])
    ]
};