import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Thead from './Thead';
import renderContext from '../storeMock';

describe('Myprofile component', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(renderContext(<Thead />));
  });

  it('should render with given state from redux store', () => {
    // Assert
    expect(component.toJSON()).toMatchSnapshot();
  });
});
