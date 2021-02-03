/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import types from './types';

export const toggleFavourite = () => (dispatch: any) => {
  dispatch({ type: types.TOGGLE_FAVOURITE });
};
