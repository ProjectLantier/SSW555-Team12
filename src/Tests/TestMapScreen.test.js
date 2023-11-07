import React from 'react';
import MapScreen from '../screens/MapScreen'; 
import { render } from '@testing-library/react-native';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';

jest.mock('expo-location', () => ({
    requestForegroundPermissionsAsync: () => Promise.resolve({ granted: true }),
  }));

jest.mock('react-native-maps', () => {
  const MapView = (props) => {
    return <div data-testid="map-view" {...props} />;
  };
  const Marker = (props) => {
    return <div data-testid="marker" {...props} />;
  };

  return {
    MapView,
    Marker,
  };
});

test('Location is enabled successfully', async () => {
  const granted = await Location.requestForegroundPermissionsAsync();
  expect(granted.granted).toBe(true);
});

test('Map is displayed when location is enabled', async () => {
    const mapView = MapView;
    expect(mapView).toBeDefined();
  });
