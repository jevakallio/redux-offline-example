import { applyMiddleware } from 'redux';
import { createOfflineStore } from 'redux-offline';
import createLogger from 'redux-logger';

import reducer from './reducer';

const options = {
  rehydrate: true
};

const store = createOfflineStore(
  reducer,
  undefined,
  applyMiddleware(createLogger({ collapsed: true })),
  options
);

export default store;
