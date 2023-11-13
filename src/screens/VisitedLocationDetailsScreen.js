import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import BadgeAndDetailsStyle from "../styles/BadgeAndDetailsStyle";

const VisitedLocationDetailsScreen = ({ route }) => {
  //take advantage of dummy info on location screen instead
  const { location } = route.params;
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

export default VisitedLocationDetailsScreen;