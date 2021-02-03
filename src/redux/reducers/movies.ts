import { Reducer } from 'react';
import types from '../actions/types';

interface State {
  movieList: Movie[];
  loading: boolean;
  errors: string[];
}
interface Action {
  type: string;
  payload: Movie[];
}

const initialState: State = {
  movieList: [],
  loading: false,
  errors: [],
};

interface Movie {
  Title: string;
  Year: string;
  Type: string;
  imdbID: string;
  Poster: string;
}
interface ResponseError {
  Response: string;
  Error: string;
}

const fetchMovies = (state: State, payload: Movie[]) => {
  const newMovies = [...payload];
  return { ...state, movieList: payload };
};
const handleFetchFailed = (state: State, payload: any) => {
  const newError = [...payload];
  return { ...state, loading: false, errors: [...payload] };
};

const movies: Reducer<State, Action> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case types.FETCH_MOVIES_STATED:
      return { ...state, loading: true };
    case types.FETCH_MOVIES_SUCCESS:
      return fetchMovies(state, payload);
    case types.FETCH_MOVIES_FAILURE:
      return handleFetchFailed(state, payload);
    default:
      return state;
  }
};

export default movies;
