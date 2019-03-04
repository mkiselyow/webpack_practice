let path = require('path');

let conf = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'main.js',
    publicPath: 'dist/'
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
        // exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
          ]
      }
    ]
  },
  devtool: "eval-sourcemap"
};

module.exports = conf;