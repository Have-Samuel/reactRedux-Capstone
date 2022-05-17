import React from 'react';
import renderer from 'react-test-renderer';
import MissionProfile from './MissionProfile';
import renderContext from '../storeMock';

describe('MissionProfile component', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(renderContext(<MissionProfile />));
  });

  it('should render with given state from redux store', () => {
    // Assert
    expect(component.toJSON()).toMatchSnapshot();
  });
});
