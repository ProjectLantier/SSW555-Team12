import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import BadgeAndDetailsStyle from "../styles/BadgeAndDetailsStyle";

const BadgeDetailsScreen = ({ route }) => {
  const { badge } = route.params;
  //dummy info for now
  return (
    <SafeAreaView style={BadgeAndDetailsStyle.wrapper}>
      <View style={BadgeAndDetailsStyle.container}>
        <Text style={BadgeAndDetailsStyle.heading}>{badge.name}</Text>
      </View>
      <View style={BadgeAndDetailsStyle.badgeDetailsContainer}>
        <Text>{badge.description}</Text>
      </View>
    </SafeAreaView>
  );
};

export default BadgeDetailsScreen;
