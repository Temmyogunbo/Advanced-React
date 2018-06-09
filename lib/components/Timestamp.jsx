import React from 'react';
import { storeProvider } from './storeProvider';

export class Timestamp extends React.PureComponent {
  static timeDisplay = timestamp =>
    timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  render() {
    return (
      <React.Fragment>{this.props.timestampDisplay}</React.Fragment>
    );
  }
}

const extraProps = (store) => ({ timestampDisplay: Timestamp.timeDisplay(store.getState().timestamp) });

export const TimestampContainer = storeProvider(extraProps)(Timestamp);