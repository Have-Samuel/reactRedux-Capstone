/* eslint-disable import/no-extraneous-dependencies */
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore();

const store = mockStore({
  missionId: '1',
  missionName: 'Teshome',
  description: 'adfasdf as fads f',
  status: true,
});

const renderContext = (element) => <Provider store={store}>{element}</Provider>;

export default renderContext;
