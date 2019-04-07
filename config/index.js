const path = require('path');

module.exports = {
	entry: 'src/app.ts',
	alias: {
		'style': 'src/styles/index.scss',
		'@Services': 'src/services',
		'@Utils': 'src/utils',
		'@Config': 'src/config'
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
