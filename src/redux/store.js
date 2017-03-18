import { createStore, applyMiddleware } from 'redux';
import { createOfflineMiddleware, enhanceReducer } from 'redux-offline';
import createLogger from 'redux-logger';

import reducer from './reducer';

const store = createStore(
  //
  enhanceReducer(reducer),
  //
  applyMiddleware(createLogger({ collapsed: true }), createOfflineMiddleware())
);

export default store;
