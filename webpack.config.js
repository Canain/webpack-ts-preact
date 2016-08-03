'use strict';

const precss = require('precss');
const autoprefixer = require('autoprefixer');
const path = require('path');

const node = {};

['fs', 'net'].forEach(m => node[m] = 'empty');

module.exports = {
	entry: './src/ts/main.tsx',
	output: {
		filename: './public/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				loader: 'babel!ts'
			},
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.s?css$/,
				loader: 'style!css!postcss'
			}
		]
	},
	postcss: () => [precss, autoprefixer],
	node: node,
	devtool: 'source-map',
	resolve: {
		modulesDirectories: ['node_modules'],
		extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx'],
		alias: {
			'react': 'preact-compat',
			'react-dom': 'preact-compat'
		}
	},
	plugins: []
};
