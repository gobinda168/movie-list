import { Reducer } from 'react';
import types from '../actions/types';

interface State {
  movieList: Movie[];
  loading: boolean;
  errors: string;
  movie: any;
}
interface Action {
  type: string;
  payload: any;
}

const initialState: State = {
  movieList: [],
  loading: false,
  errors: '',
  movie: null,
};

export interface Movie {
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
  return { ...state, movieList: payload };
};
const handleFetchFailed = (state: State, payload: ResponseError) => {
  const newError = payload.Error;
  return { ...state, loading: false, errors: newError, movieList: [] };
};

const fetchMovie = (state: State, payload: any) => {
  return { ...state, movie: payload };
};
const handleFetchMovieFailed = (state: State, payload: ResponseError) => {
  const newError = payload.Error;
  return { ...state, loading: false, errors: newError, movie: null };
};
const movies: Reducer<State, Action> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case types.FETCH_MOVIES_STARTED:
      return { ...state, loading: true };
    case types.FETCH_MOVIES_SUCCESS:
      return fetchMovies(state, payload);
    case types.FETCH_MOVIES_FAILURE:
      return handleFetchFailed(state, payload);
    case types.FETCH_MOVIEBYID_STARTED:
      return { ...state, loading: true };
    case types.FETCH_MOVIEBYID_SUCCESS:
      return fetchMovie(state, payload);
    case types.FETCH_MOVIEBYID_FAILURE:
      return handleFetchMovieFailed(state, payload);
    default:
      return state;
  }
};

export default movies;
