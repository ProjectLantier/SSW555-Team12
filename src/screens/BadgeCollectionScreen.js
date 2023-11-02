import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "@expo/vector-icons/AntDesign";

const BadgeCollectionScreen = ({ navigation }) => {
  //add image to badge later
  const badges = [
    {
      id: 1,
      name: "Noobie",
      description: "Awarded for your first location visited!",
    },
    {
      id: 2,
      name: "Explorer",
      description: "Awarded for visiting three locations!",
    },
    {
      id: 3,
      name: "Adventurer",
      description: "Awarded for visiting 10 locations!",
    },
    {
      id: 4,
      name: "Foodie Adventurer",
      description: "Awarded for visiting 5 food locations!",
    },
    {
      id: 5,
      name: "Time Traveler",
      description: "Awarded for visiting 5 hisorical sites!",
    },
  ];

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.heading}>Badges</Text>
      </View>
      <View style={styles.badges}>
        {badges.map((badge) => {
          return (
            <TouchableOpacity
              style={styles.badge}
              key={badge.id}
              onPress={() =>
                navigation.navigate("BadgeDetailsScreen", { badge })
              }
            >
              <View style={styles.badgeInformation}>
                <Text style={styles.badgeName}>{badge.name}</Text>
              </View>
              <Icon name="right" size={15} color="black" />
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 0.5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 20,
    marginLeft: 20,
  },
  heading: {
    fontSize: 36,
    fontWeight: "bold",
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
    paddingBottom: 10,
  },
  badgeName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default BadgeCollectionScreen;
