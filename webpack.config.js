const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");


 module.exports = {
   mode: 'development',
   entry: {
     index: './src/index.js',
     
   },
   devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
   output: {
     path: path.resolve(__dirname, 'dist'),
   },
   plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./public", to: "./" }
      ],
    }),
  ],
 };
