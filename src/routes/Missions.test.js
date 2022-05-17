import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Missions from './Missions';
import renderContext from '../components/storeMock';

describe('Myprofile component', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(renderContext(<Missions />));
  });

  it('should render with given state from redux store', () => {
    // Assert
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render Myprofile', () => {
    // Arrange
    render(renderContext(<Missions />));

    // Assert
    expect(screen.getByText(/Mission/i)).toBeInTheDocument();
  });
});
