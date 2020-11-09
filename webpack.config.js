const path = require('path');
const WebpackBar = require('webpackbar');


module.exports = {
  entry: './b.ts',
  watch: false,
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
    {
      test: /\.tsx?$/,
      loader: "ts-loader",
      exclude: /node_modules|vue\/src/,
      options: {
        appendTsSuffixTo: [/\.vue$/]
      }
    },
    {
      test: /\.js$/,
      use: ["source-map-loader"],
      enforce: "pre"
    }
    ]
  },
  plugins: [new WebpackBar()],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.styl']
  },
  output: {
    filename: 'b.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'nemo',
    publicPath: 'dist'
  }
};