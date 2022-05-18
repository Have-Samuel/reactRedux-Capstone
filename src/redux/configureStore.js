import { applyMiddleware, combineReducers, configureStore } from 'redux';
import thunk from 'redux-thunk';
import AnimalReducer from './animals/animal';

const root = combineReducers({
  animal: AnimalReducer,
});
const store = configureStore(root, applyMiddleware(thunk));

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import AnimalReducer from './animals/animal';

// const reducer = Reducer;

// const store = configureStore({
//   reducer,
//   middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
//   devTools: process.env.NODE_ENV !== 'production',
// });

// export default store;
