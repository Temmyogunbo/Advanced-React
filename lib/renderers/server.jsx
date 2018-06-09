import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import { StateApi } from 'StateApi';

import { config } from 'config';
import { App } from 'components/App';

export const serverRender = async () => {

  const response = await axios.get(`http://${config.host}:${config.port}/data`);
  const store = new StateApi(response.data.data);

  return {
    initialData: response.data,
    initialMarkup: ReactDOMServer.renderToString(<App store={store} />)
  };
};