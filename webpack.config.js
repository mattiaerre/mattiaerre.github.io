const path = require('path');

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
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
