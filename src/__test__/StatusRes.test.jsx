/* eslint-disable no-whitespace-before-property */
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Status from '../components/rockets/StatusRes';

it('renders correctly', () => {
  const tree = renderer .create(
    <Provider store={store}>
      <Status />
      {' '}

    </Provider>,
  ) .toJSON();
  expect(tree).toMatchSnapshot();
});
