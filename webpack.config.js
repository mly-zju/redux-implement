var config = {
  devtool: 'source-map',
  entry: './index.js',

  output: {
    path: 'dist/script',
    filename: 'bundle.js',
    publicPath: 'dist/script'
  },
  devServer: {
    port: 8080,
    inline: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

module.exports = config;
