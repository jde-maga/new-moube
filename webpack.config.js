const webpack = require('webpack');
const path = require('path');

process.traceDeprecation = true;

module.exports = {
  devtool: 'source-map',
  mode: "development",
  entry: {
    index: [
      path.resolve(__dirname, 'client/index.js'),
    ],
  },

  output: {
    path: path.resolve(__dirname, 'public/bundles'),
    filename: '[name].js',
    publicPath: '/public/bundles/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({ debug: true }),
  ],

  devServer: {
    before: function(app) {
      app.get('/projects', function(req, res) {
        console.log(__dirname + "\\index.html");
        res.redirect("/");
      });
      app.get('/users*', function(req, res) {
        console.log(__dirname + "\\index.html");
        res.redirect("/");
      });
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
          }
        ]
      }
    ],
  },
};