import { createStore, compose, applyMiddleware } from 'redux';
import animals from './reducers/animals';
import thunk from 'redux-thunk';

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  animals,
  composeEnchancer(applyMiddleware(thunk)),
);

export default store;
