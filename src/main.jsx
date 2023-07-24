import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme } from '@twilio-paste/core/theme';
import { Provider } from 'react-redux';

import Application from './components/Application';
import { store } from './store';

import './index.css';

ReactDOM.createRoot(
  
  document.getElementById('root')
).render(
  <Provider store={store}>
    <Theme.Provider theme="default">
      <React.StrictMode>
        <Application />
      </React.StrictMode>
    </Theme.Provider>
  </Provider>,
);
