import React from 'react';
import renderer from 'react-test-renderer';
import renderContext from '../storeMock';
import Mission from './_mocks_/Mission';

describe('Mission component', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(renderContext(<Mission />));
  });

  it('should render with given state from redux store', () => {
    // Assert
    expect(component.toJSON()).toMatchSnapshot();
  });
});
