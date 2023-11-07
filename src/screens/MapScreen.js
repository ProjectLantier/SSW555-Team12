import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text } from "react-native";
import MapView, {Marker} from "react-native-maps";
import * as Location from 'expo-location';


const MapScreen = () => {

  const [markerLocations, setMarkerLocations] = useState([
    {id: 1, title: "Stevens Insitute of Technology", latitude: 40.7448, longitude: -74.0256, latitudeDelta: 0.04, longitudeDelta: 0.02},
    {id: 2, title: "Benny Tudinos", latitude: 40.744240, longitude: -74.029120, latitudeDelta: 0.04, longitudeDelta: 0.02},
    {id: 3, title: "Hoboken Terminal", latitude: 40.7349, longitude: -74.0291, latitudeDelta: 0.04, longitudeDelta: 0.02},

  ]);
  const [locationPermissionGranted, setLocationPermissionGranted] = useState(false);

  useEffect(() => {
    const requestLocationPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        setLocationPermissionGranted(true);
      } else {
        setLocationPermissionGranted(false);
      }
    };

    requestLocationPermission();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <MapView
          style={{ width: "100%", height: "100%" }}
          initialRegion={{
            latitude: 40.7440,
            longitude: -74.0324,
            latitudeDelta: 0.04,
            longitudeDelta: 0.02,
          }}
          showsUserLocation={locationPermissionGranted}
        >
          {markerLocations.map((marker) => (
            <Marker
              key={marker.id}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.title}
            />
          ))}
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
