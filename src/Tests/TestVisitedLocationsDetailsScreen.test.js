import React from 'react';
import { render } from '@testing-library/react-native';
import VisitedLocationDetailsScreen from '../screens/VisitedLocationDetailsScreen';

//needs updating

test('Visited Location Details Screen renders without errors', () => {
  const route = {
    params: {
      location: {
        name: 'abc',
        description: 'that nice place down the block',
      },
    },
  };
  render(<VisitedLocationDetailsScreen route={route} />);
});

test('Visited Location Details Screen displays the correct location name', () => {
  const route = {
    params: {
      location: {
        name: 'abc',
        description: ' place down the block',
      },
    },
  };
  const { getByText } = render(<VisitedLocationDetailsScreen route={route} />);
  const locationNameElement = getByText('abc');
  expect(locationNameElement).toBeDefined();
});

test('Visited Location Details Screen displays the correct location description', () => {
  const route = {
    params: {
      location: {
        name: 'abc',
        description: 'that nice place down the block',
      },
    },
  };
  const { getByText } = render(<VisitedLocationDetailsScreen route={route} />);
  const locationDescriptionElement = getByText("Description: that nice place down the block");
  expect(locationDescriptionElement).toBeDefined();
});
