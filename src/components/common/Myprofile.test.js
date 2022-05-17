import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Myprofile from './Myprofile';
import renderContext from '../storeMock';

describe('Myprofile component', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(renderContext(<Myprofile />));
  });

  it('should render with given state from redux store', () => {
    // Assert
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render Myprofile', () => {
    // Arrange
    render(renderContext(<Myprofile />));

    // Assert
    expect(screen.getByText(/Missions/i)).toBeInTheDocument();
  });
});
