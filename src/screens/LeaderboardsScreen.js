import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { ref, onValue, query, orderByChild } from "firebase/database";
import { db } from "../../firebaseConfig";
import Leaderboard from "../components/Leaderboard";

const LeaderboardsScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersQuery = query(ref(db, 'users'), orderByChild('points'));

    const fetchUsers = () => {
      onValue(usersQuery, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const usersArray = Object.values(data);
          usersArray.sort((a, b) => (b.points || 0) - (a.points || 0));
          setUsers(usersArray);
        }
      });
    };

    fetchUsers();
  }, []);

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
