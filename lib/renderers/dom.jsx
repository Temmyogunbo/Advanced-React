import React from 'react';
import { hydrate } from 'react-dom';

import { App } from 'components//App';
import { StateApi } from 'StateApi';

const store = new StateApi(window.initialData.data);

hydrate(<App store={store} />, document.getElementById('root'));
