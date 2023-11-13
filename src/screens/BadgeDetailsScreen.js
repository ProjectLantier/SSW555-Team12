import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import BadgeAndDetailsStyle from "../styles/BadgeAndDetailsStyle";

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

export default BadgeDetailsScreen;
