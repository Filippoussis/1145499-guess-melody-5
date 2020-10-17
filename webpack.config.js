const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    open: true,
    port: 1337,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@hocs': path.resolve(__dirname, 'src/hocs/'),
    }
  },
  devtool: 'source-map',
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
      'ReactDOM': 'react-dom',
      'PropTypes': 'prop-types',
    })
  ],
};
