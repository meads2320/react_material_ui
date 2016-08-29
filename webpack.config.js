var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval-src-map',
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/main.js'
        ]
    },
    output: {
        filename: './public/[name].js',
        path: path.join(__dirname, 'public'),
        publicPath: '/public/' 
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    }
}