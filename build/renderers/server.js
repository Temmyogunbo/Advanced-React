'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverRender = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _StateApi = require('StateApi');

var _config = require('config');

var _App = require('components/App');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const serverRender = exports.serverRender = async () => {

  const response = await _axios2.default.get(`http://${_config.config.host}:${_config.config.port}/data`);
  const store = new _StateApi.StateApi(response.data.data);

  return {
    initialData: response.data,
    initialMarkup: _server2.default.renderToString(_react2.default.createElement(_App.App, { store: store }))
  };
};