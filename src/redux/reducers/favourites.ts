import { Reducer } from 'react';
import types from '../actions/types';

interface State {
  movieList: string[];
}
interface Action {
  type: string;
  payload: string;
}

const initialState: State = {
  movieList: [],
};
// reducer functions
const updateFavouriteMovieList = (state: State, payload: string) => {
  let newFavouriteMovieList = [...state.movieList];
  const index = newFavouriteMovieList.indexOf(payload);
  if (index < 0) {
    newFavouriteMovieList.push(payload);
  } else {
    newFavouriteMovieList = newFavouriteMovieList.filter(
      (movie) => movie !== payload
    );
  }
  return { ...state, movieList: [...newFavouriteMovieList] };
};

const farourites: Reducer<State, Action> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case types.TOGGLE_FAVOURITE:
      // console.log('action', payload);
      return updateFavouriteMovieList(state, payload);
    default:
      return state;
  }
};

export default farourites;
