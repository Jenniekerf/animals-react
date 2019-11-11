import { createStore } from 'redux';
import animalsReducer from './reducers/animals'
  
let store = createStore(
  animalsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

export default store;
