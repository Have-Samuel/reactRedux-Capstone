import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/configureStore';

describe('render App correctly', () => {
  test('render', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchInlineSnapshot();
  });
});
