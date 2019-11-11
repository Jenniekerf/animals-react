import { createStore, compose, applyMiddleware } from 'redux';
import animalsReducer from './reducers/animals';
import thunk from 'redux-thunk';

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  animalsReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeEnchancer(applyMiddleware(thunk)),
);

export default store;
