const path = require('path');
const webpack = require('webpack');


module.exports = {
  context: path.join(__dirname),
  devtool: 'cheap-source-map',
  entry:  "./app/index.jsx",
  output: {
    path: path.join(__dirname, './'),
    publicPath: '/',
    filename: "./bundle.js"
  },

  resolve:{
    extensions:['', '.js','.jsx']
  },

  module: {
    loaders: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.less$/, exclude: /node_modules/, loader: 'style!css!postcss!less' },
            { test: /\.css$/, exclude: /node_modules/, loader: 'style!css!postcss' },
            { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000' },  // 限制大小5kb
            { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=10000'}, // 限制大小小于5k
            { test: /Cesium\.js$/, loader: 'script-loader'}
    ]
  },

  eslint: {
    configFile: '.eslintrc' // Rules for eslint
  },

  postcss: [
    require('autoprefixer') //调用autoprefixer插件，例如 display: flex
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
