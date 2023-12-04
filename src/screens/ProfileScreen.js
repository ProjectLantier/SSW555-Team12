import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const ProfileScreen = ({ navigation }) => {
  const logout = async () => {
    try {
      await AsyncStorage.removeItem("isloggedIn");
      navigation.navigate("RegisterScreen");
    } catch (e) {
      console.log(e);
    }
  };

  const userCredentials = useAuth();

  useEffect(() => {
    console.log("id: ", userCredentials.uid);
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.profileInformationContainer}>
        <Text style={styles.profileTitle}>Profile</Text>
        <Text style={styles.profileInformation}>Username: </Text>
        <Text style={styles.profileInformation}>Progress:</Text>
      </View>
      <View style={styles.profileSectionsContainer}>
        <TouchableOpacity
          style={styles.profileSection}
          onPress={() => navigation.navigate("BadgeCollectionScreen")}
        >
          <View style={styles.profileSectionHeader}>
            <Text style={styles.profileSectionTitle}>Badge Collection</Text>
            <Text style={styles.profileSectionDetails}>
              View your badge collection here!
            </Text>
          </View>
          <View style={styles.profileSectionArrow}>
            <Icon name="right" size={15} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.profileSection}
          onPress={() => navigation.navigate("VisitedLocationsScreen")}
        >
          <View style={styles.profileSectionHeader}>
            <Text style={styles.profileSectionTitle}>Visited Locations</Text>
            <Text style={styles.profileSectionDetails}>
              See all the locations you've gone to!
            </Text>
          </View>
          <View style={styles.profileSectionArrow}>
            <Icon name="right" size={15} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logout} onPress={logout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  profileInformationContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 20,
    marginLeft: 20,
  },
  profileTitle: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profileInformation: {
    fontWeight: "bold",
    color: "#3477eb",
    fontSize: 20,
  },
  profileSectionsContainer: {
    flex: 4,
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },
  profileSection: {
    borderColor: "grey",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 12,
    width: "95%",
    marginBottom: 10,
  },
  profileSectionHeader: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
  },
  profileSectionTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  profileSectionDetails: {
    marginLeft: 8,
  },
  profileSectionArrow: {
    justifyContent: "center",
  },
  logoutText: {
    fontSize: 20,
  },
  logout: {
    marginTop: 280,
    padding: 20,
    backgroundColor: "#ADD8E6",
    borderRadius: 10,
  },
});

export default ProfileScreen;
