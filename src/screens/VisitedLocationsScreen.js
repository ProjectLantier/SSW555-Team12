import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ref, set, update, onValue, get, child } from "firebase/database";
import { db } from "../../firebaseConfig";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useAuth } from "../context/AuthContext";

const VisitedLocationsScreen = ({ navigation }) => {
  const [locations, setLocations] = useState([]);
  const userCredentials = useAuth();

  useEffect(() => {
    const userRef = ref(db, `users/${userCredentials.uid}`);
    get(child(userRef, "visitedLocations"))
      .then((snapshot) => {
        const visitedLocations = snapshot.val() || [];
        console.log(visitedLocations);
        setLocations(visitedLocations);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.heading}>Visited Locations</Text>
      </View>
      <ScrollView style={styles.ScrollView}>
        {locations && locations.length !== 0 ? (
          locations.map((location, index) => (
            <TouchableOpacity
              key={index.toString()}
              style={styles.card}
              onPress={() =>
                navigation.navigate("VisitedLocationDetailsScreen", {
                  location,
                })
              }
            >
              <Text style={styles.cardHeader}>{location.name}</Text>
              <Text style={styles.cardText}>{location.description}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noLocations}>No locations visited yet!</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0.5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 20,
    marginLeft: 20,
  },
  heading: {
    fontSize: 36,
    fontWeight: "bold",
  },
  locationItem: {
    padding: 20,
    alignItems: "center",
  },
  ScrollView: {
    width: "100%",
    marginTop: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cardText: {
    fontSize: 16,
  },
  noLocations: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default VisitedLocationsScreen;
