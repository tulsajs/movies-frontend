import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from './movies';
import pagination from './pagination';

const rootReducer = combineReducers({
  movies,
  pagination,
  routing: routerReducer
});

export default rootReducer;
