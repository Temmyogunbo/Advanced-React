'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('components//App');

var _StateApi = require('StateApi');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const store = new _StateApi.StateApi(window.initialData.data);

_reactDom2.default.render(_react2.default.createElement(_App.App, { store: store }), document.getElementById('root'));