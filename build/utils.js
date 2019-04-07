const path = require('path');
const config = require('../config');

process.env.APP_TYPE = process.argv[process.argv.length - 1] || 'client';
// process.traceDeprecation = true;

exports.assetsPath = function (_path) {
	const assetsSubDirectory = process.env.NODE_ENV === 'production' ?
		config.build.assetsSubDirectory :
		config.dev.assetsSubDirectory;
	return path.posix.join(assetsSubDirectory, _path);
};

exports.resolve = function (dir) {
	return path.join(__dirname, '../', dir);
};
