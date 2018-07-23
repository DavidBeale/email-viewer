import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import Main from '../main/Main';

const store = configureStore();

export default function Root() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
