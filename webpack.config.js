const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(css|scss|sass)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(scss|sass)$/,
                use: {
                    loader: 'sass-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
        ]
    },
    optimization: {
        usedExports: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        port: 9005,
        hot: true,
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}