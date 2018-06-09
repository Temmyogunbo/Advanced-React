import React from 'react';
import Proptypes from 'prop-types';
import pickby from 'lodash.pickby';

import { ArticleList } from './ArticleList';
import { SearchBarContainer } from './SearchBar';
import { TimestampContainer } from './Timestamp';


export class App extends React.PureComponent {
  // to make context type work
  static childContextTypes = {
    store: Proptypes.object
  }

  // context object
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  appState = () => {
    const { articles, searchTerm } = this.props.store.getState();
    return { articles, searchTerm };
  }
  state = this.appState();

  onStoreChange = () => this.setState(this.appState)

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
      articles = pickby(articles, (value) => value.title.match(searchRe) || value.body.match(searchRe));
    }
    return (
      <React.Fragment>
        <TimestampContainer />
        <SearchBarContainer />
        <ArticleList
          articles={articles}
          store={this.props.store}
        />
      </React.Fragment>
    );
  }
}
