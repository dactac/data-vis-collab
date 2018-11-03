const webpack = require('webpack');
const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  node: {
    fs: 'empty'
  },
  devtool: "#eval-source-map",
  devServer:{
    port:8080,
    //public: 'http://103.192.224.124:8080',
    compress: true,
    historyApiFallback: true,
    compress: true,
    proxy:{
      '/api' : {
        target: 'http://localhost:3000/',
        pathRewrite: {'^/api' : ''},
        changeOrigin: true,
        secure: false,
      },
      '/socket.io':{
        target: 'http://localhost:3000/',
        ws:true,
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        //exclude: /node_modules/,
        use: ["style-loader",'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
}