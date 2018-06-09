export class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: '',
      timestamp: new Date(),
    };
    this.subscriptions = {};
    this.subscriptionId = 0;
  }

  mapIntoObject = (arr) => {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  lookUpAuthor = (authorId) => this.data.authors[authorId]

  mergeWithState = (stateChange) => {
    this.data = {
      ...this.data,
      ...stateChange,
    };
    this.notifySubscribers();
  }
  setSearchTerm = (searchTerm) => this.mergeWithState({ searchTerm });

  getState = () => {
    return this.data;
  }

  subscribe = (cb) => {
    this.subscriptionId++;
    this.subscriptions[this.subscriptionId] = cb;
    return this.subscriptionId;
  }

  startClock = () => {
    setInterval(() => {
      this.mergeWithState({
        timestamp: new Date()
      });
    }, 1000);
  }

  notifySubscribers = () => Object.values(this.subscriptions).forEach(cb => cb())

  unsubscribe = (subscriptionId) => delete this.subscriptions[subscriptionId]
}
