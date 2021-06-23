const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/app.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]-[fullhash].bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
