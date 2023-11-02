import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { StyleSheet } from 'react-native'

const LeaderboardsScreen = () => {
  const users = [
    { id: 1, name: 'Eric', adventureLevel: 3 },
    { id: 2, name: 'Andy', adventureLevel: 7 },
    { id: 3, name: 'Eshan', adventureLevel: 12 },
    { id: 4, name: 'Nicholas', adventureLevel: 4 },
    { id: 5, name: 'Rishabh', adventureLevel: 15 },
    { id: 6, name: 'Edward', adventureLevel: 3 },
    { id: 7, name: 'Andrew', adventureLevel: 9 },
  ]

  users.sort((user1, user2) => {
    if (user1.adventureLevel === user2.adventureLevel) {
      return user1.name < user2.name ? -1 : 1
    }
    return user2.adventureLevel - user1.adventureLevel
  })

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.heading}>Adventure Level Rankings</Text>
        <Leaderboard users={users} />
      </View>
    </SafeAreaView>
  )
}

const Leaderboard = ({ users }) => {
  return (
    <View style={styles.leaderboard}>
      <View style={styles.header}>
        <Text>Rank</Text>
        <Text>Name</Text>
        <Text>Adventure Level</Text>
      </View>
      {users.map((user, index) => (
        <View style={styles.user} key={user.id}>
          <Text>{index + 1}</Text>
          <Text>{user.name}</Text>
          <Text>{user.adventureLevel}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    paddingTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  leaderboard: {
    height: 700,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  user: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
})

export default LeaderboardsScreen
