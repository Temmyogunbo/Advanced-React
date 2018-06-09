import { StateApi } from '../StateApi';
import { data } from '../testData';

const store = new StateApi(data);
describe('DataApi', () => {
  it('exposes article as an object', () => {

    const articles =store.getState().articles ;
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles[articleId].title).toBe(articleTitle);
  });

  it('exposes author as an object', () => {
    const authors = store.getState().authors;
    const authorId = data.authors[0].id;
    const authorsFirstName = data.authors[0].firstName;

    expect(authors[authorId].firstName).toBe(authorsFirstName);
  });
});