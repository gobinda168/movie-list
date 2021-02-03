/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import types from './types';

export interface Dispatch {
  dispatch: () => void;
}
export const fetchMovieList = (url: string) => async (dispatch: any) => {
  dispatch({ type: types.FETCH_MOVIES_STATED });
  try {
    const res = await fetch(url);
    const movies = await res.json();
    dispatch({ type: types.FETCH_MOVIES_SUCCESS, payload: movies });
  } catch (error) {
    dispatch({ type: types.FETCH_MOVIES_FAILURE, payload: error });
  }
};
