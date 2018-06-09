'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ArticleList = require('../components/ArticleList');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ArticleList', () => {

  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' }
    }
  };

  it('renders correctly', () => {
    const wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ArticleList.ArticleList, testProps));

    expect(wrapper.find('ArticleContainer').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});