import { Dispatch } from 'react';
import types from './types';

interface Movie {
  title: string;
  poster: string;
  releaseDate: string;
  imdbID: string;
}
export const toggleFavourite = (payload: Movie) => (
  dispatch: Dispatch<any>
): void => {
  dispatch({ type: types.TOGGLE_FAVOURITE, payload });
};
