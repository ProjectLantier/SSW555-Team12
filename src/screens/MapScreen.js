import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  Image,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import * as Location from "expo-location";
import { ref, set, update, onValue, get, child } from "firebase/database";
import { db } from "../../firebaseConfig";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const MapScreen = () => {
  const [locationPermissionGranted, setLocationPermissionGranted] = useState(null);
  const [locations, setLocations] = useState([]);
  const [usersVisitedLocations, setUsersVisitedLocations] = useState([]);
  const userCredentials = useAuth();

  useEffect(() => {
    const locationsRef = ref(db, "locations");
    onValue(locationsRef, (snapshot) => {
      const data = snapshot.val();
      setLocations(data);

      const userRef = ref(db, `users/${userCredentials.uid}`);
      get(child(userRef, "visitedLocations")).then((snapshot) => {
        const visitedLocations = snapshot.val() || [];
        setUsersVisitedLocations(visitedLocations);
      });
    });
  }, [userCredentials.uid]);

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

  function toggleVisitedState(location) {
    // setLocations((prevLocations) =>
    //   prevLocations.map((location) =>
    //     location.id === markerId && !location.visited
    //       ? { ...location, visited: true }
    //       : location
    //   )
    // );
    const userRef = ref(db, `users/${userCredentials.uid}`);

    get(child(userRef, "visitedLocations"))
      .then((snapshot) => {
        const visitedLocations = snapshot.val() || [];
        console.log(visitedLocations);
        let updatedLocations = [...visitedLocations];
        if (
          !visitedLocations.some(
            (visitedLocation) => visitedLocation.id === location.id
          )
        ) {
          updatedLocations.push({ ...location });
        }

        update(userRef, { visitedLocations: updatedLocations });
        setUsersVisitedLocations(updatedLocations);
      })
      .catch((error) => {
        console.error(error);
      });

    // update(ref(db, `users/${userCredentials.uid}`), {
    //   visited: true,
    // });
  }

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
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/4284/4284088.png",
                }}
                style={{ width: 30, height: 30 }}
              />
              <Callout
                style={{ width: 100 }}
                onPress={() => toggleVisitedState(significantLocation)}
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
                    title={
                      usersVisitedLocations.some(
                        (visitedLocation) =>
                          visitedLocation.id === significantLocation.id
                      )
                        ? "Visited!"
                        : "Visit"
                    }
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