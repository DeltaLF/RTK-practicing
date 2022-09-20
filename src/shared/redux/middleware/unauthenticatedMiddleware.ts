import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit';
import { resetStateAction } from '../actions/resetState';

export const unauthenticatedMiddleware: Middleware = ({ dispatch }) => (next) => (action) => {
  // HOC type guard
  if (isRejectedWithValue(action) && action.payload.status === 401) {
    // clean the state if rejected
    dispatch(resetStateAction());
  }

  return next(action);
};