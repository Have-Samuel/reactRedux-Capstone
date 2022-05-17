import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import Reducer from '';

const reducer = Reducer;

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
