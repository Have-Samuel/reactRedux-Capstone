import renderer from 'react-test-renderer';
import renderContext from './components/storeMock';

import App from './App';

describe('Myprofile component', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(renderContext(<App />));
  });

  it('should render with given state from redux store', () => {
    // Assert
    expect(component.toJSON()).toMatchSnapshot();
  });
});
