'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleContainer = exports.Article = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _storeProvider = require('./storeProvider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aa',
    borderBottomWidth: 1,
    marginBottom: 10

  },
  title: { fontWeight: 'bold' },
  date: { fontSeize: '0.85em', color: '#8888' },
  author: { paddingBottom: 10, paddingTop: 10 },
  body: { paddingLeft: 20 }
};

const dateDisplay = dateString => new Date(dateString).toDateString();

const Article = exports.Article = props => {
  const { article, author } = props;

  return _react2.default.createElement(
    'div',
    { style: styles.article },
    _react2.default.createElement(
      'div',
      { style: styles.title },
      article.title
    ),
    _react2.default.createElement(
      'div',
      { style: styles.date },
      dateDisplay(article.date)
    ),
    _react2.default.createElement(
      'div',
      { style: styles.author },
      _react2.default.createElement(
        'a',
        { href: author.website },
        author.firstName,
        ' ',
        author.lastName
      )
    ),
    _react2.default.createElement(
      'div',
      { style: styles.body },
      article.body
    )
  );
};

Article.propTypes = {
  article: _propTypes2.default.shape({
    date: _propTypes2.default.string.isRequired,
    body: _propTypes2.default.string.isRequired,
    title: _propTypes2.default.string.isRequired
  })
};

const extraProps = (store, originalProps) => ({ author: store.lookUpAuthor(originalProps.article.authorId) });

const ArticleContainer = exports.ArticleContainer = (0, _storeProvider.storeProvider)(extraProps)(Article);