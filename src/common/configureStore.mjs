import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createAsyncAwaitActionMiddleware } from 'redux-async-await-action-middleware';

import rootReducer from './reducers';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  return createStore(
    connectRouter(history)(rootReducer),
    preloadedState,
    applyMiddleware(
      createAsyncAwaitActionMiddleware(),
      routerMiddleware(history),
      createLogger()
    )
  );
}
