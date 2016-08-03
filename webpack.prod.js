'use strict';

const config = require('./webpack.config.js');
const webpack = require('webpack');

config.plugins.push(new webpack.DefinePlugin({
	'process.env': {
		NODE_ENV: '"production"',
		APP_ENV: '"browser"'
	}
}));

config.resolve.alias = {
	'react': 'preact-compat',
	'react-dom': 'preact-compat'
};

module.exports = config;
