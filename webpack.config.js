const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        // filename: 'main.js',
    },
    plugins: [
    new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'main.html'
    }),
    new MiniCSSExtractPlugin()
    ],
    module: {
        rules:[
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.css$/, 
                    use: [
                        MiniCSSExtractPlugin.loader,
                        'css-loader'
                    ],
                },
        ]},
};
