const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: { // configurar documento de entrada
        main: path.resolve(__dirname, './src/index.js')
    },
    output: { // configurar proyecto de salida
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].bundle.js',
        publicPath: '/'
    },
    devServer: {
        disableHostCheck: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }, // compilador de js (react)
            {
                test: /\.woff($\?)|\.woff2($\?)|\.ttf($\?)|\.eot($\?)|\.svg($\?)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }, // fonts
            {
                test: /\.(css|scss)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }, // css and sass
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'img/'
                }
            } // images
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css',
        }),
        new CleanWebpackPlugin()
    ]
}