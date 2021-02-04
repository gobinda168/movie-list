import { Reducer } from 'react';
import { IMovie } from '../../interfaces/IMovie';
import types from '../actions/types';

interface IState {
  movieList: IMovie[];
  loading: boolean;
  errors: null | string;
  movie: any;
  urlParams: IUrlParam;
  currentPage: number;
}
interface IUrlParam {
  search: string;
  filter: string;
  page: number;
}
interface Action {
  type: string;
  payload: any;
}

const initialState: IState = {
  movieList: [],
  loading: false,
  errors: null,
  movie: null,
  urlParams: { search: '', filter: '', page: 0 },
  currentPage: 0,
};

const fetchMovies = (state: IState, payload: IMovie[]) => {
  return { ...state, loading: false, movieList: payload };
};
const handleFetchFailed = (state: IState, payload: string) => {
  return { ...state, loading: false, errors: payload, movieList: [] };
};

const fetchMovie = (state: IState, payload: any) => {
  return { ...state, loading: false, movie: payload };
};
const handleFetchMovieFailed = (state: IState, payload: string) => {
  return { ...state, loading: false, errors: payload, movie: null };
};

const movies: Reducer<IState, Action> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case types.STORE_URL_PARAMS_ON_SUCCESS:
      return { ...state, urlParams: payload };
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
