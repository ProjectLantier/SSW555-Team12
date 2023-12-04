import React, { useState } from "react";
import { SafeAreaView, View, Text, Button, StyleSheet, Image } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import * as Location from "expo-location";
import { ref, set, update, onValue } from "firebase/database";
import { db } from "../../firebaseConfig";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const MapScreen = () => {
  const [locationPermissionGranted, setLocationPermissionGranted] =
    useState(false);
  const [locations, setLocations] = useState([]);
  const userCredential = useAuth();

  async function getLocationPermission() {
    const granted = await Location.requestForegroundPermissionsAsync();
    if (granted) {
      setLocationPermissionGranted(true);
    } else {
      setLocationPermissionGranted(false);
    }
  }

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
      // console.log(data);
      console.log("id: ", userCredential.uid);
    });
  }, []);

  return (
    <SafeAreaView>
      <View>
        <MapView
          style={{ width: "100%", height: "100%" }}
          initialRegion={{
            latitude: 40.744,
            longitude: -74.0324,
            latitudeDelta: 0.04,
            longitudeDelta: 0.02,
          }}
          onMapReady={getLocationPermission}
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
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/4284/4284088.png',
                }}
                style={{ width: 30, height: 30 }} />
              <Callout style={{width: 100}}
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
