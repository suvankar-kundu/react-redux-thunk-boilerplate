import path from 'path';
import { NamedModulesPlugin, HotModuleReplacementPlugin } from 'webpack';

export default {
    target: 'web',
    mode: 'development',
    context: path.join(__dirname, '../src'),
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        './client/index.js'
    ],
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'index.js',
        publicPath: '/scripts'
    },
    devtool: ' inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new NamedModulesPlugin(),
        new HotModuleReplacementPlugin()
    ]
};