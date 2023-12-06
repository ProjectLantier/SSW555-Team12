import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Leaderboard from "../components/Leaderboard";
import { ref, set, update, onValue, get, child, query, orderByChild } from "firebase/database";
import { db } from "../../firebaseConfig";
import { useEffect } from "react";

const LeaderboardsScreen = () => {
  var users_arr = []
  const users = ref(db, 'users/');
    onValue(users, (snapshot) => {
      const data = snapshot.val();
      console.log("users: ", data);
      users_arr.push(data);
    });
  useEffect(() => {
    console.log(users)
  }, []);

  /*
  const users = [
    { id: 1, name: "Eric", adventureLevel: 3 },
    { id: 2, name: "Andy", adventureLevel: 7 },
    { id: 3, name: "Eshan", adventureLevel: 12 },
    { id: 4, name: "Nicholas", adventureLevel: 4 },
    { id: 5, name: "Rishabh", adventureLevel: 15 },
    { id: 6, name: "Edward", adventureLevel: 3 },
    { id: 7, name: "Andrew", adventureLevel: 9 },
  ];
  */

  users.sort((user1, user2) => {
    return user2.points - user1.points;
  });

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.heading}>Adventure Level Rankings</Text>
        <Leaderboard users={users} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    paddingTop: 10,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
});

export default LeaderboardsScreen;