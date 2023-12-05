import {React, useState, useEffect} from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button
} from "react-native";
// import Icon from "@expo/vector-icons/AntDesign";

const BadgeCollectionScreen = ({ navigation }) => {
  //add image to badge later
  //grab these from database
  const [totalPoints, setTotalPoints] = useState(0);
  const badges = [
    {
      id: 1,
      name: "Noobie",
      description: "Awarded for your first location visited!",
      points: 1,
    },
    {
      id: 2,
      name: "Explorer",
      description: "Awarded for visiting three locations!",
      points: 2,
    },
    {
      id: 3,
      name: "Adventurer",
      description: "Awarded for visiting 10 locations!",
      points: 4,
    },
    {
      id: 4,
      name: "Foodie Adventurer",
      description: "Awarded for visiting 5 food locations!",
      points: 3,
    },
    {
      id: 5,
      name: "Time Traveler",
      description: "Awarded for visiting 5 historical sites!",
      points: 3,
    },
  ];

  useEffect(() => {
    let points = 0;
    badges.forEach(badge => {
      points += badge.points;
    });
    setTotalPoints(points);
  })

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.backButtonContainer}>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
      
      <View style={styles.container}>
        <Text style={styles.heading}>Badges</Text>
        <Text style={{marginTop: 10, fontWeight: "bold"}}>Adventurer Level: {totalPoints}</Text>
      </View>
      <View style={styles.badges}>
        {badges.map((badge) => {
          return (
            <View
              style={styles.badge}
              key={badge.id}
              onPress={() =>
                navigation.navigate("BadgeDetailsScreen", { badge })
              }
            >
              <View style={styles.badgeInformation}>
                <Text>
                  <Text style={styles.badgeHead}>Badge {badge.id}: </Text>
                  <Text style={styles.badgeName}>{badge.name}</Text>
                  <Text style={[styles.badgePoints, { alignSelf: "flex-end" }]}>Points: {badge.points}</Text>
                </Text>
                <Text style={styles.badgeDescription}> {badge.description}</Text>

              </View>
              {/* <Icon name="right" size={15} color="black" /> */}
            </View>
          );
        })}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Leaderboards")}>
          <Text style={styles.buttonText}>View Leaderboard</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backButtonContainer: {
    position: 'absolute',
    top: 30,
    left: 0,
    padding: 10,
  },

  wrapper: {
    flex: 1,
  },
  container: {
    flex: 0.5,
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 30
  },
  heading: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#033dfc",
  },
  badges: {
    flex: 5,
    flexDirection: "column",
    alignItems: "center",
  },
  badge: {
    width: "95%",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderColor: "grey",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  badgeInformation: {
    padding: 10,
    marginBottom: 5,
  },
  badgeInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  badgeHead: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#033dfc",
  },
  badgeName: {
    fontSize: 20,
  },
  badgePoints: {
    alignSelf: "flex-end",
    fontSize: 16,
    fontWeight: "bold",
    color: "#033dfc",
  },
  
  badgeDescription: {
    fontSize: 18,
    color: "#788eec",
    marginTop: 10,
    marginLeft: 10
  },

  button: {
    marginTop: 40,
    padding: 20,
    backgroundColor: "#788eec",
    borderRadius: 10,
    color: "white"
  },

  buttonText: {
    color: "white",
    fontSize: 20,
  }
});

export default BadgeCollectionScreen;
