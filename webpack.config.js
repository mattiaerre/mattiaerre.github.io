const path = require('path');

module.exports = {
  entry: {
    v1: './src/client/index.js',
    v2: './src/client-v2/index.js'
  },
  output: {
    filename: 'bundle.[name].js',
    path: path.resolve(__dirname, 'public/javascripts')
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'] },
      { test: /\.jsx$/, loaders: ['babel'] },
      { test: /\.json$/, loader: 'json' }
    ]
  }
};
