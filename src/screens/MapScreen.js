import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, Button } from "react-native";
import * as Location from "expo-location";

const MapScreen = () => {
  const [locationPermissionGranted, setLocationPermissionGranted] = useState(false);

  useEffect(() => {
    // Call handleMapTabClick when the component is mounted (page is opened)
    const requestLocationPermission = async () => {
      const granted = await Location.requestForegroundPermissionsAsync();
      if (granted) {
        setLocationPermissionGranted(true);
      }
    };

    requestLocationPermission();
  }, []); // The empty dependency array ensures this effect runs once

  return (
    <SafeAreaView>
      <View>
        <Text>Map</Text>
        {locationPermissionGranted && <Text>Location Permission Granted!</Text>}
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
