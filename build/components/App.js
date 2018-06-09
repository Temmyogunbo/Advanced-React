'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash.pickby');

var _lodash2 = _interopRequireDefault(_lodash);

var _ArticleList = require('./ArticleList');

var _SearchBar = require('./SearchBar');

var _Timestamp = require('./Timestamp');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _react2.default.PureComponent {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.appState = () => {
      const { articles, searchTerm } = this.props.store.getState();
      return { articles, searchTerm };
    }, this.state = this.appState(), this.onStoreChange = () => this.setState(this.appState), _temp;
  }
  // to make context type work


  // context object
  getChildContext() {
    return {
      store: this.props.store
    };
  }


  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  render() {
    let { articles, searchTerm } = this.state;
    const searchRe = new RegExp(searchTerm, 'i');

    if (searchTerm) {
      articles = (0, _lodash2.default)(articles, value => value.title.match(searchRe) || value.body.match(searchRe));
    }
    return _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(_Timestamp.TimestampContainer, null),
      _react2.default.createElement(_SearchBar.SearchBarContainer, null),
      _react2.default.createElement(_ArticleList.ArticleList, {
        articles: articles,
        store: this.props.store
      })
    );
  }
}
exports.App = App;
App.childContextTypes = {
  store: _propTypes2.default.object };