const config = require('../config');

process.env.APP_TYPE = process.argv[process.argv.length - 1] || 'client';
if (!process.env.NODE_ENV) {
	process.env.ENV = JSON.parse(config.dev.env.ENV);
}
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev');

const compiler = webpack(webpackConfig);
const chalk = require('chalk');

console.log(chalk.green(`> App type: ${process.env.APP_TYPE}`));
console.log(chalk.green('> Starting dev compiler...'));

require('webpack-dev-middleware-hard-disk')(compiler, {
	publicPath: webpackConfig.output.publicPath,
	quiet: true,
	watchOptions: {
		ignored: /dist|manifest/,
		aggregateTimeout: 300,
		poll: true
	},
	stats: {
		colors: true
	},
});
