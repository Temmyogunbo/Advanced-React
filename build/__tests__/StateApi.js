'use strict';

var _StateApi = require('../StateApi');

var _testData = require('../testData');

const store = new _StateApi.StateApi(_testData.data);
describe('DataApi', () => {
  it('exposes article as an object', () => {

    const articles = store.getState().articles;
    const articleId = _testData.data.articles[0].id;
    const articleTitle = _testData.data.articles[0].title;

    expect(articles[articleId].title).toBe(articleTitle);
  });

  it('exposes author as an object', () => {
    const authors = store.getState().authors;
    const authorId = _testData.data.authors[0].id;
    const authorsFirstName = _testData.data.authors[0].firstName;

    expect(authors[authorId].firstName).toBe(authorsFirstName);
  });
});