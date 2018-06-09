import React from 'react';
import { ArticleContainer } from './Article';

export class ArticleList extends React.PureComponent {
  render() {
    return (
      <div>
        {Object.values(this.props.articles).map(article =>
          <ArticleContainer
            key={article.id}
            article={article}
          />)}
      </div>
    );
  }
}