'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

class StateApi {
  constructor(rawData) {
    this.mapIntoObject = arr => {
      return arr.reduce((acc, curr) => {
        acc[curr.id] = curr;
        return acc;
      }, {});
    };

    this.lookUpAuthor = authorId => this.data.authors[authorId];

    this.mergeWithState = stateChange => {
      this.data = _extends({}, this.data, stateChange);
      this.notifySubscribers();
    };

    this.setSearchTerm = searchTerm => this.mergeWithState({ searchTerm });

    this.getState = () => {
      return this.data;
    };

    this.subscribe = cb => {
      this.subscriptionId++;
      this.subscriptions[this.subscriptionId] = cb;
      return this.subscriptionId;
    };

    this.startClock = () => {
      setInterval(() => {
        this.mergeWithState({
          timestamp: new Date()
        });
      }, 1000);
    };

    this.notifySubscribers = () => Object.values(this.subscriptions).forEach(cb => cb());

    this.unsubscribe = subscriptionId => delete this.subscriptions[subscriptionId];

    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: '',
      timestamp: new Date()
    };
    this.subscriptions = {};
    this.subscriptionId = 0;
  }

}
exports.StateApi = StateApi;