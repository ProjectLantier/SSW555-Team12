import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Username: </Text>
        <Text>Visited Locations:</Text>
        <Text>Badges:</Text>
        <Text>Progress:</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
