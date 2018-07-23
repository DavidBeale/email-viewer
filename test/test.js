const glob = require('glob');
const path = require('path');

require = require('esm')(module); // eslint-disable-line
glob.sync('**/*.spec.mjs').forEach(file => require(path.resolve(file, '.'))); // eslint-disable-line
