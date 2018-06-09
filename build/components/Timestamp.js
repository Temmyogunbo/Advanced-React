'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimestampContainer = exports.Timestamp = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storeProvider = require('./storeProvider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Timestamp extends _react2.default.PureComponent {

  render() {
    return _react2.default.createElement(
      _react2.default.Fragment,
      null,
      this.props.timestampDisplay
    );
  }
}

exports.Timestamp = Timestamp;

Timestamp.timeDisplay = timestamp => timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const extraProps = store => ({ timestampDisplay: Timestamp.timeDisplay(store.getState().timestamp) });

const TimestampContainer = exports.TimestampContainer = (0, _storeProvider.storeProvider)(extraProps)(Timestamp);