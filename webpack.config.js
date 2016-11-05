const path = require('path');

module.exports = {
  entry: './src/client/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/javascripts')
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['babel']
      }
    ]
  }
};
