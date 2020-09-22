import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autReducer from './reducers/auth';

const persistedReducer = persistReducer(
  {
    key: 'auth',
    version: 1,
    whitelist: ['auth'],
    storage,
  },
  combineReducers({
    auth: autReducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  thunk: true,
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export default store;
