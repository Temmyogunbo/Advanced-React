import React from 'react';
import PropTypes from 'prop-types';
import { storeProvider } from './storeProvider';

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

const dateDisplay = (dateString) => new Date(dateString).toDateString();

export const Article = (props) => {
  const { article, author} = props;

  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>{dateDisplay(article.date)}</div>
      <div style={styles.author}>
        <a href={author.website}>{author.firstName} {author.lastName}</a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    date: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
};

const extraProps = (store, originalProps) => ({ author: store.lookUpAuthor(originalProps.article.authorId) });

export const ArticleContainer = storeProvider(extraProps)(Article);
