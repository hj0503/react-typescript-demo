const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CleanWebpackPlugin = require('clean-webpack-plugin');

  module.exports = {
      entry: './src/index.tsx',
      output: {
          filename: 'bundle.[hash].js',
          path: path.join(__dirname, '/dist')
      },
      resolve: {
        extensions: ['.jsx', '.js', '.ts', '.tsx', '.json', '.scss', '.css']
      },
    //   externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    //   },
      module: {
          rules: [
              {
                  test: /\.css$/,
                  use: ['style-loader', 'css-loader']
              },
              {
                test: /\.jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/
              },
              { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
              { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
          ]
      },
      plugins: [
          new HtmlWebpackPlugin({
              template: './index.html'
          }),
          new CleanWebpackPlugin(['dist'])
      ]
  };