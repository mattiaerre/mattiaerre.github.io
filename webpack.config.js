const path = require('path');

module.exports = {
  entry: {
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
      { test: /\.json$/, loader: 'json' },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
    ]
  }
};
