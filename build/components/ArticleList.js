'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleList = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Article = require('./Article');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ArticleList extends _react2.default.PureComponent {
  render() {
    return _react2.default.createElement(
      'div',
      null,
      Object.values(this.props.articles).map(article => _react2.default.createElement(_Article.ArticleContainer, {
        key: article.id,
        article: article
      }))
    );
  }
}
exports.ArticleList = ArticleList;