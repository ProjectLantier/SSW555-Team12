import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

const VisitedLocationDetailsScreen = ({ route }) => {
  const { location } = route.params;
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.heading}>{location.name}</Text>
      </View>
      <View style={styles.badgeDetailsContainer}>
        <Text style={styles.badgeDetails}>
          Description: {location.description}
        </Text>
        <Text style={styles.badgeDetails}>Latitude: {location.latitude}</Text>
        <Text style={styles.badgeDetails}>Longitude: {location.longitude}</Text>
        <Text style={styles.badgeDetails}>Address: {location.address}</Text>
        <Text style={styles.badgeDetails}>Type: {location.type}</Text>
        <Text style={styles.badgeDetails}>
          {location.visited ? "Already visited!" : "Not visited yet!"}
        </Text>
        {/* an image of the place here */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 20,
    flexDirection: "row",
  },
  heading: {
    fontSize: 36,
    fontWeight: "bold",
  },
  badgeDetailsContainer: {
    flex: 3,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
  },
  badgeDetails: {
    fontSize: 20,
  },
});

export default VisitedLocationDetailsScreen;
