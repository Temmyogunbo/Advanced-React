'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBarContainer = exports.SearchBar = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _storeProvider = require('./storeProvider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SearchBar extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      searchTerm: ''
    }, this.doSearch = (0, _lodash2.default)(() => {
      this.props.store.setSearchTerm(this.state.searchTerm);
    }, 300), this.handleSearch = event => this.setState({ searchTerm: event.target.value }, () => this.doSearch()), _temp;
  }

  render() {
    return _react2.default.createElement('input', {
      type: 'search',
      placeholder: 'Enter search term here',
      value: this.state.searchTerm,
      onChange: this.handleSearch
    });
  }
}

exports.SearchBar = SearchBar;
const SearchBarContainer = exports.SearchBarContainer = (0, _storeProvider.storeProvider)()(SearchBar);