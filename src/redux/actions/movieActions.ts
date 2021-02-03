import { Dispatch } from 'react';
import types from './types';

export const fetchMovieList = (url: string) => async (
  dispatch: Dispatch<any>
): Promise<any> => {
  dispatch({ type: types.FETCH_MOVIES_STATED });
  try {
    const res = await fetch(url);
    const { Search } = await res.json();
    console.log(Search);
    dispatch({ type: types.FETCH_MOVIES_SUCCESS, payload: Search });
  } catch (error) {
    dispatch({ type: types.FETCH_MOVIES_FAILURE, payload: error });
  }
};
