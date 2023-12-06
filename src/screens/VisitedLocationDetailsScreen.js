import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Button } from "react-native";

const VisitedLocationDetailsScreen = ({ route, navigation }) => {
  const { location } = route.params;
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.backButtonContainer}>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.container}>
        <Text style={styles.heading}>{location.name}</Text>
        <Text style={styles.locationDetails}>{location.description}</Text>
      </View>
      <View style={styles.locationDetailsContainer}>
        <Text style={styles.locationDetails}>
          <Text style={styles.descriptor}>Latitude:</Text> {location.latitude}
        </Text>
        <Text style={styles.locationDetails}>
          <Text style={styles.descriptor}>Longitude:</Text> {location.longitude}
        </Text>
        <Text style={styles.locationDetails}>
          <Text style={styles.descriptor}>Address:</Text> {location.address}
        </Text>
        <Text style={styles.locationDetails}>
          <Text style={styles.descriptor}>Type:</Text> {location.type}
        </Text>
        {/* an image of the place here */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white"
  },
  backButtonContainer: {
    position: 'absolute',
    top: 30,
    left: 0,
    padding: 10,
  },
  container: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 26,
    flexDirection: "column",
  },
  heading: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  locationDetailsContainer: {
    flex: 3,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    margin: 30
  },
  locationDetails: {
    fontSize: 20,
  },
  descriptor: {
    fontWeight: "bold",
  },
});

export default VisitedLocationDetailsScreen;
