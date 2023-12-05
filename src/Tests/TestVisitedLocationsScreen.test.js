import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import VisitedLocationsScreen from '../screens/VisitedLocationsScreen'

const mockNavigation = {
    navigate: jest.fn(),
    goBack: jest.fn(),
};

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

test('Visited Locations renders without errors', () => {
    render(<VisitedLocationsScreen />)
})

test('Visited Locations count is greater than 0', () => {
    const { getAllByText } = render(<VisitedLocationsScreen />);
    const locationCards = getAllByText(/Name:/);
    expect(locationCards.length).toBeGreaterThan(0);
});

test('pressing the "Back" button triggers navigation goBack', async () => {
    const { getByText } = render(<VisitedLocationsScreen navigation={mockNavigation} />);
    const backButton = getByText('Back');
    fireEvent.press(backButton);
    expect(mockNavigation.goBack).toHaveBeenCalledTimes(1); // Check if it's called exactly once
});

test('Pressing a location card triggers navigation with the right parameters', () => {
    const { getAllByText } = render(<VisitedLocationsScreen navigation={mockNavigation} />);
    const locationNameElements = getAllByText('Name: abc');
    const firstLocationName = locationNameElements[0];
    fireEvent.press(firstLocationName.parent);
    expect(mockNavigation.navigate).toHaveBeenCalledWith(
        "VisitedLocationDetailsScreen",
        { location: expect.any(Object) }
    );
});

test('Visited Locations count is equal to 6', () => {
    const { getAllByText } = render(<VisitedLocationsScreen />);
    const locationCards = getAllByText(/Name:/);
    expect(locationCards.length == 6);
});
