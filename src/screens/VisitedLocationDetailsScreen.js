import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

//VisitedLocationDetailsScreen is a component that displays the details of a visited location
const VisitedLocationDetailsScreen = ({ route }) => {
  //extract the location object from the route params
  const { location } = route.params;
  //renders the location details within a SafeAreaView
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.heading}>{location.name}</Text>
      </View>
      <View style={styles.badgeDetailsContainer}>
        <Text>{location.description}</Text>
      </View>
    </SafeAreaView>
  );
};

//styles for the VisitedLocationDetailsScreen component
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  //container for the location name
  container: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 20,
    flexDirection: "row",
  },
  //styling for the location name
  heading: {
    fontSize: 36,
    fontWeight: "bold",
  },
  //container for the location description
  badgeDetailsContainer: {
    flex: 4,
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default VisitedLocationDetailsScreen;
