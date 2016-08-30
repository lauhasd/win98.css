module.exports = {
  entry: './src/js/win98.js',
  output: {
    path: './public/js/',
    filename: 'win98.bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
