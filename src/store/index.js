import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import screenTracking from './screenTracking';

const store = createStore(
  reducers,
  {},
  compose(applyMiddleware(screenTracking, thunk, logger))
);

export default store;
