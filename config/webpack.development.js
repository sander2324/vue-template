const path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(process.cwd(), 'dist/'),
    compress: true,
    open: false,
    port: 8080,
    stats: 'minimal',
  },
});
