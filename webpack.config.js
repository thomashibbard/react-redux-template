const chalk = require('chalk');
const { resolve } = require('path');
const webpack = require('webpack');



/* plugins */
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: resolve(__dirname, 'app', 'index.js'),
  build: resolve(__dirname, 'build'),
};

const commonConfig = {
	// Entries have to resolve to files! They rely on Node
	// convention by default so if a directory contains *index.js*,
	// it resolves to that.
  // entry: {
  //   app: PATHS.app,
  // },
  context: resolve(__dirname, 'src'),

  entry: [
    'webpack-dev-server/client?http://127.0.0.1:5555',
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:5555',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    PATHS.app
    // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    // the output bundle

    path: resolve(__dirname, 'build'),

    publicPath: '/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [ 'babel-loader', ],
        exclude: /node_modules/
      },
      // {
      //   test: /\.css$/,
      //   use: [ 'style-loader', 'css-loader?modules', ],
      // },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              // localIdentName: '[hash:base64]-[name]-[local]',
              // modules: true,
              sourceMap: true
            }
          },
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     sourceMap: true
          //   }
          // },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [
                resolve(__dirname, 'node_modules', 'susy', 'sass'),
                resolve(__dirname, 'node_modules', 'breakpoint-sass', 'stylesheets'),
                resolve(__dirname, 'sass'),
              ]
            }
          }
        ],
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
};

const productionConfig = () => commonConfig;

const developmentConfig = () => {
  const config = {
    devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: resolve(__dirname, 'build'),
    // match the output path

    publicPath: '/'
    // match the output `publ

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoEmitOnErrorsPlugin(),
        // new webpack.DefinePlugin({
          // 'process.env.NODE_ENV': JSON.stringify('development')
        // })
    ],

  };
  return Object.assign(
		{},
		commonConfig,
		config
	);
};

module.exports = (env) => {
  console.log(chalk.blue(env));
  console.log(chalk.red(process.env.PORT));
  if(env === 'production') {
   return productionConfig();
  }
  return developmentConfig();
};
