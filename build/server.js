'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('config');

var _server = require('renderers/server');

var _testData = require('./testData');

var _testData2 = _interopRequireDefault(_testData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

app.use(_express2.default.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (request, response) => {
  const initialContent = await (0, _server.serverRender)();

  response.render('index', _extends({}, initialContent));
});

app.get('/data', (request, response) => {
  response.send(_testData2.default);
});

app.listen(_config.config.port, () => process.stdout.write(`Server running on port ${_config.config.port}\n`));