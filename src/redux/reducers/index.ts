import { combineReducers } from 'redux';
import favourites from './favourites';
import movies from './movies';

const rootReducer = combineReducers({
  favourites,
  movies,
});

export default rootReducer;
