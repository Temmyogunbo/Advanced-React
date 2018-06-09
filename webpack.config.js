const path = require('path');

const config = {
  watch: true,
  mode: 'development',
  entry: {
    app: 'renderers/dom.jsx',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env', 'stage-2']
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        default: false
      }
    }
  }
};

module.exports = config;