import { applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import AnimalReducer from './animals/animal';

const rootReducer = combineReducers({
  animal: AnimalReducer,
});
const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import AnimalReducer from './animals/animal';

// const reducer = AnimalReducer;

// const store = configureStore({
//   reducer,
//   middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
//   devTools: process.env.NODE_ENV !== 'production',
// });

// export default store;
