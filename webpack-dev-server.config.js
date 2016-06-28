const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
	//Entry point to the project
	entry: [
		'webpack/hot/dev-server',
		'webpack/hot/only-dev-server',
		path.join(__dirname, 'src/app/app.js'),
	],

	//Server Configuration options
	devServer: {
		contentBase: 'src/www', // base path dev server
		devtool: 'eval',
		hot: true,
		inline: true,
		port: 3000,
		host: 'localhost',
	},

	devtool: 'eval',

	output: {
		path: buildPath, // path of output build
		filename: 'app.js',
	},

	plugins: [
		//Enable HMR
		new webpack.HotModuleReplacementPlugin(),
		// Allows erros and warnings but does not stop compiling
		new webpack.NoErrorsPlugin(),
		//Move Files
		new TransferWebpackPlugin([
			{from: 'www'},
		], path.resolve(__dirname, 'src')),
	],
	module: {
		loaders: [
			{
				test: /\.js$/, // All .js files
				loaders: ['react-hot', 'babel-loader'],
				exclude: [nodeModulesPath],
			},
		],
	},
};

module.exports = config;