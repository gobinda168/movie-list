import { Reducer } from 'react';
import types from '../actions/types';

interface State {
  movieList: string[];
  movies: any[];
}
interface Action {
  type: string;
  payload: string;
}

const initialState: State = {
  movieList: localStorage.getItem('favourites')
    ? JSON.parse(localStorage.getItem('favourites') || '{}')
    : [],
  movies: localStorage.getItem('favouriteMovieDetails')
    ? JSON.parse(localStorage.getItem('favouriteMovieDetails') || '{}')
    : [],
};
// reducer functions
const updateFavouriteMovieList = (state: State, payload: any) => {
  const { title } = payload;
  let newFavouriteMovieList = [...state.movieList];
  let newFavouriteMovies = [...state.movies];

  const index = newFavouriteMovieList.indexOf(title);
  if (index < 0) {
    newFavouriteMovieList.push(title);
    newFavouriteMovies.push(payload);
  } else {
    newFavouriteMovieList = newFavouriteMovieList.filter(
      (movie) => movie !== title
    );
    newFavouriteMovies = newFavouriteMovies.filter(
      (movie) => movie.title !== title
    );
  }
  localStorage.setItem('favourites', JSON.stringify(newFavouriteMovieList));
  localStorage.setItem(
    'favouriteMovieDetails',
    JSON.stringify(newFavouriteMovies)
  );

  return {
    ...state,
    movieList: [...newFavouriteMovieList],
    movies: [...newFavouriteMovies],
  };
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
