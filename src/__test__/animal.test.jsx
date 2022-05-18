import { applyMiddleWare, configureStore } from 'redux';
import thunk from 'redux-thunk';
import AnimalReducer, { getAnimalFail, getAnimalRequest, getAnimalSuccess } from '../redux/animals/animal';

const initialState = {
  loading: false,
  animalArray: [],
  error: '',
};

const store = configureStore(
  AnimalReducer,
  applyMiddleWare(thunk),
);

describe('AnimalReducer', () => {
  describe('getAnimal actions', () => {
    it('shouls return the exact initial state', () => {
      expect(store.getState()).toEqual(initialState);
    });

    it('should return loading key in the initial state to be true', () => {
      store.dispatch(getAnimalRequest());
      expect(store.getState().loading).toBeTtuthy();
    });

    it('should return an error', () => {
      const newError = 'check Endpoint then try again';
      store.dispatch(getAnimalFail(newError));
      expect(store.getState().error).toEqual(newError);
    });

    it('should return item in the animalArray', () => {
      const newAnimalArrayData = [{
        id: 112,
        name: 'Elephant',
        diet: 'Rhoinoserus',
      }];
      store.dispatch(getAnimalSuccess(newAnimalArrayData));
      expect(store.getState().animalArrary).toEqual(newAnimalArrayData);
    });
  });
});
