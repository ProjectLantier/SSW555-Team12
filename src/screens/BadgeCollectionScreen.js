import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

dummy = {id: 1, 
  userBadges: ["restaurant 1", "artwork 1", "site 1", "site 2"], 
  name: 'datboi'
}
const BadgeCollectionScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Badges!</Text>
        <Text>Datboi's Adventure Level:</Text>
        <Text>dummy.userBadges.length</Text>
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

export default BadgeCollectionScreen;
