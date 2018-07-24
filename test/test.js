const glob = require('glob');
const path = require('path');
const { JSDOM } = require('jsdom');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

// Support mjs for require
require.extensions['.mjs'] = require.extensions['.js'];

// Setup DOM
const jsdom = new JSDOM(`
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <div id="test"></div>
    </body>
</html>
`);
const { window } = jsdom;

global.jsdom = jsdom;
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js'
};
copyProps(window, global);


// Configure enzyme
Enzyme.configure({
  adapter: new Adapter()
})


// Load all spec files
glob.sync('**/*.spec.mjs').forEach(file => require(path.resolve(file, '.'))); // eslint-disable-line


function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}
