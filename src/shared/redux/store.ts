import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Reducer } from 'redux';
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { AUTH_API_REDUCER_KEY, authApi } from '../../api/auth/api';
import { USER_API_REDUCER_KEY, userApi } from '../../api/github/user/api';
import { authReducer, authSlice } from '../../features/auth/slice';
import { RESET_STATE_ACTION_TYPE } from './actions/resetState';
import { unauthenticatedMiddleware } from './middleware/unauthenticatedMiddleware';

const reducers = {
  [authSlice.name]: authReducer,
  [AUTH_API_REDUCER_KEY]: authApi.reducer,
  [USER_API_REDUCER_KEY]: userApi.reducer,  
};

const combinedReducer = combineReducers<typeof reducers>(reducers);
export const rootReducer: Reducer<RootState> = (state, action) => {
  // a rootReducer with some global redcuers
  if (action.type === RESET_STATE_ACTION_TYPE) {
    state = {} as RootState;
  }

  return combinedReducer(state, action);
}


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => { 
    return getDefaultMiddleware({
    // use default middleware and add some custom middleware 
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }).concat([
    unauthenticatedMiddleware,
    authApi.middleware,
    userApi.middleware
  ])},
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
export const useTypedDispatch = () => useDispatch<AppDispatch>(); // dispatch with type set to stroe
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;