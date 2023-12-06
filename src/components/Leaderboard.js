import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Leaderboard = ({ users }) => {
  return (
    <View style={styles.leaderboard}>
      <View style={styles.header}>
        <Text>Rank</Text>
        <Text>Name</Text>
        <Text>Adventure Level</Text>
      </View>
      {users.map((user, index) => (
        <View style={styles.user} key={user.email}>
          <Text>{index + 1}</Text>
          <Text>{user.email}</Text>
          <Text>{user.points}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  leaderboard: {
    height: 700,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  user: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
});

export default Leaderboard;
