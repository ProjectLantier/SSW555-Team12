import React, { useState } from "react";
import { SafeAreaView, View, Text, Button, StyleSheet } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import * as Location from "expo-location";
import { ref, set, update, onValue } from "firebase/database";
import { db } from "../../firebaseConfig";
import { useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Alert } from "react-native";

const MapScreen = () => {
  const [locationPermissionGranted, setLocationPermissionGranted] = useState(null);
  const [locations, setLocations] = useState([]);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    const checkLocationPermission = async () => {
        const granted = await Location.requestForegroundPermissionsAsync();
        setLocationPermissionGranted(true);
        setMapReady(true)
        if (!granted) {
          setLocationPermissionGranted(false);
          Alert.alert(
            "Location Permission Required",
            "Please enable location services to use this feature.",
            [
              { text: "OK", onPress: () => {} }
            ]
          );
        }
      };
      checkLocationPermission();
    }, []);

  function toggleVisitedState(markerId) {
    setLocations((prevLocations) =>
      prevLocations.map((location) =>
        location.id === markerId && !location.visited
          ? { ...location, visited: true }
          : location
      )
    );

    update(ref(db, `locations/${markerId}`), {
      visited: true,
    });
  }

  useEffect(() => {
    const locationsRef = ref(db, "locations");
    onValue(locationsRef, (snapshot) => {
      const data = snapshot.val();
      setLocations(data);
      console.log(data);
    });
  }, []);

  const handleMapready = () => {
    setMapReady(true);
  };

  return (
    <SafeAreaView>
      {locationPermissionGranted && mapReady && (
        <View>
        <MapView
          style={{ width: "100%", height: "100%" }}
          initialRegion={{
            latitude: 40.744,
            longitude: -74.0324,
            latitudeDelta: 0.04,
            longitudeDelta: 0.02,
          }}
          onMapReady={handleMapready}
          showsUserLocation={locationPermissionGranted}
        >
          {locations.map((significantLocation) => (
            <Marker
              key={significantLocation.id}
              coordinate={{
                latitude: significantLocation.latitude,
                longitude: significantLocation.longitude,
              }}
              title={significantLocation.name}
              description={significantLocation.description}
            >
              <Callout
                onPress={() => toggleVisitedState(significantLocation.id)}
              >
                <View>
                  <Text style={styles.markerName}>
                    {significantLocation.name}
                  </Text>
                  <Text style={styles.markerDescription}>
                    {significantLocation.description}
                  </Text>
                  <Text style={styles.markerInformation}>Click to Visit!</Text>
                  <Button
                    title={significantLocation.visited ? "Visited!" : "Visit"}
                  />
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
      </View>
      )}
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  markerName: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#92A8D1",
  },
  markerDescription: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  markerInformation: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
});

export default MapScreen;