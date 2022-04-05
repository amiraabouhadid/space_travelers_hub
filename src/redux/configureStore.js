import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missions from './missions/missions';

const rootReducer = combineReducers({
  missions,
});
const middleware = [thunk, logger];
const store = createStore(
  rootReducer,
  applyMiddleware(...middleware),
);
export default store;
