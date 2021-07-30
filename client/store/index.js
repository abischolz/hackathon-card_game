import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

function reducer(state = {}, action) {
  return state;
}
const store = createStore(reducer);

export default store;
