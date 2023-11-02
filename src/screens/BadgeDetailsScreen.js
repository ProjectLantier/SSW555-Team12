import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

const BadgeDetailsScreen = ({ route }) => {
  const { badge } = route.params;
  //dummy info for now
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.heading}>{badge.name}</Text>
      </View>
      <View style={styles.badgeDetailsContainer}>
        <Text>{badge.description}</Text>
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
    flex: 4,
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default BadgeDetailsScreen;
