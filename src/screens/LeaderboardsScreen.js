import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Leaderboard from "../components/Leaderboard";
import { ref, set, update, onValue, get, child, query, orderByChild } from "firebase/database";
import { db } from "../../firebaseConfig";

const LeaderboardsScreen = () => {
  const users = query(ref(db, 'users'), orderByChild(`points`));
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

  users.sort((user1, user2) => {
    if (user1.adventureLevel === user2.adventureLevel) {
      return user1.name < user2.name ? -1 : 1;
    }
    return user2.adventureLevel - user1.adventureLevel;
  });
  */

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