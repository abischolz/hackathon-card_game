module.exports = {
  entry: ['./index.js'],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  // context: __dirname,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
