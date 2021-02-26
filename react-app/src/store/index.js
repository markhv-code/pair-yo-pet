import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import sessionReducer from './session';
import userReducer from './users';
import petReducer from './pets';
import messageReducer from './messages';

const rootReducer = combineReducers({
  session: sessionReducer,
  users: userReducer,
  pets: petReducer,
  messages: messageReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preLoadedState) => {
  return createStore(rootReducer, preLoadedState, enhancer);
};

export default configureStore;
