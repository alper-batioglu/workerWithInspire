const path = require('path');
const WebpackBar = require('webpackbar');


module.exports = {
  entry: './worker/worker.ts',
  watch: false,
  devtool: 'source-map',
  mode: 'development',
  target: "node",
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
    filename: 'worker.js',
    path: path.resolve(__dirname, '../dist/worker'),
    libraryTarget: 'umd',
    library: 'nemo',
    globalObject: 'this'
  }
};