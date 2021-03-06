import { Dispatch } from 'react';
import types from './types';

interface IUrlParams {
  search: string;
  filter: string;
  page?: number;
}

export const storeUrlParams = (payload: IUrlParams) => (
  dispatch: Dispatch<any>
): void => {
  dispatch({ type: types.STORE_URL_PARAMS_ON_SUCCESS, payload });
};

export const fetchMovieList = (url: string) => async (
  dispatch: Dispatch<any>
): Promise<any> => {
  dispatch({ type: types.FETCH_MOVIES_STARTED });
  try {
    const res = await fetch(url);
    const { Search } = await res.json();
    dispatch({ type: types.FETCH_MOVIES_SUCCESS, payload: Search });
  } catch (error) {
    dispatch({ type: types.FETCH_MOVIES_FAILURE, payload: error.Error });
  }
};
export const fetchMovieById = (url: string) => async (
  dispatch: Dispatch<any>
): Promise<any> => {
  dispatch({ type: types.FETCH_MOVIEBYID_STARTED });
  try {
    const res = await fetch(url);
    const movie = await res.json();
    dispatch({ type: types.FETCH_MOVIEBYID_SUCCESS, payload: movie });
  } catch (error) {
    dispatch({ type: types.FETCH_MOVIEBYID_FAILURE, payload: error });
  }
};
