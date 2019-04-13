const path = require('path');

module.exports = {
	entry: 'src/app.ts',
	alias: {
		'style': 'src/styles/index.scss',
		'@services': 'src/services',
		'@utils': 'src/utils',
		'@config': 'src/config',
		'@libs': 'src/assets/libs'
	},
	build: {
		env: require('./prod.env'),
		assetsSubDirectory: 'src/assets/static',
	},
	dev: {
		env: require('./dev.env'),
		assetsSubDirectory: 'src/assets/static',
	}
};
