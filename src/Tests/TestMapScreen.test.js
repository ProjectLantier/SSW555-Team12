import React from 'react'
import { render} from '@testing-library/react-native'
import MapScreen from '../screens/MapScreen';

jest.mock('react-native-maps', () => {
    const { View } = require('react-native');
    const MockMapView = (props) => {
      return <View testID='map'>{props.children}</View>;
    };
    const MockMarker = (props) => {
      return <View testID='marker'>{props.children}</View>;
    };
    return {
      __esModule: true,
      default: MockMapView,
      Marker: MockMarker,
    };
});

jest.mock('firebase/database', () => {
    return {
      // Mock any functions or properties you use from the module
        ref: jest.fn(),
        set: jest.fn(),
        update: jest.fn(),
        onValue: jest.fn(),
        getDatabase: jest.fn()
    };
});

jest.mock('firebase/app', () => {
    return {
      // Mock any functions or properties you use from the module
        initializeApp: jest.fn(),
    };
});

jest.mock('@firebase/auth', () => {
    return {
      // Mock any functions or properties you use from the module
        signInWithEmailAndPassword: jest.fn(),
        createUserWithEmailAndPassword: jest.fn(),
        signOut: jest.fn(),
        onAuthStateChanged: jest.fn(),
    };
});

  jest.mock('expo-location', () => {
    return {
      // Mock any functions or properties you use from the module
        requestForegroundPermissionsAsync: jest.fn(),
    };
  });

test('Maps renders without errors', () => {
    render(<MapScreen />)
})

test('Map has markers', () => {
    const { getAllByTestId } = render(<MapScreen />);
    const markers = getAllByTestId('marker');
    expect(markers.length).toBeGreaterThan(0);
});
