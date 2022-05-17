import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketProfile from '../components/common/RocketProfile';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <RocketProfile />
      </Provider>,
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
