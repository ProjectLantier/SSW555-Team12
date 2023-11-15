import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegisterScreen from "./RegisterScreen";
import ProfileScreen from "./ProfileScreen";
import LeaderboardsScreen from "./LeaderboardsScreen";
import MapScreen from "./MapScreen";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      {/*   Will make info screen later for home component instead of register     */}
      
      {/*   can change map into something else later    */}
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Leaderbords" component={LeaderboardsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
