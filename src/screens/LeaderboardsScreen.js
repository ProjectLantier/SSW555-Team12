import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Leaderboard from "../components/Leaderboard";
import { useEffect } from "react";
import { useState } from "react";
import { ref, set, update, onValue, get, child } from "firebase/database";
import { db } from "../../firebaseConfig";

const LeaderboardsScreen = () => {
  // const users = [
  //   { id: 1, name: "Eric", adventureLevel: 3 },
  //   { id: 2, name: "Andy", adventureLevel: 7 },
  //   { id: 3, name: "Eshan", adventureLevel: 12 },
  //   { id: 4, name: "Nicholas", adventureLevel: 4 },
  //   { id: 5, name: "Rishabh", adventureLevel: 15 },
  //   { id: 6, name: "Edward", adventureLevel: 3 },
  //   { id: 7, name: "Andrew", adventureLevel: 9 },
  // ];

  const [userIds, setUserIds] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersRef = ref(db, "users/");
    onValue(usersRef, (snapshot) => {
      let data = snapshot.val();
      data = Object.keys(data);
      setUserIds(data);
    });
  }, []);

  useEffect(() => {
    let currentUsers = [];
    for (const userId of userIds) {
      const userRef = ref(db, `users/${userId}`);
      onValue(userRef, (snapshot) => {
        const user = snapshot.val();
        currentUsers.push(user);
      });
    }
    console.log(currentUsers);
    currentUsers.sort((user1, user2) => {
      if (user1.adventureLevel === user2.adventureLevel) {
        return user1.email < user2.email ? -1 : 1;
      }
      return user2.adventureLevel - user1.adventureLevel;
    });
    setUsers(currentUsers);
  }, [userIds]);

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.heading}>Adventure Level Rankings</Text>
        <View style={styles.leaderboard}>
          <View style={styles.header}>
            <Text>Rank</Text>
            <Text>Name</Text>
            <Text>Adventure Level</Text>
          </View>
          {users &&
            users.map((user, index) => (
              <View style={styles.user} key={index}>
                <Text>{index + 1}</Text>
                <Text>{user.email}</Text>
                <Text>{user.adventureLevel}</Text>
              </View>
            ))}
        </View>
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

export default LeaderboardsScreen;
