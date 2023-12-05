import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegisterScreen from "./RegisterScreen";
import ProfileScreen from "./ProfileScreen";
import LeaderboardsScreen from "./LeaderboardsScreen";
import MapScreen from "./MapScreen";
import { Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faMap, faListAlt } from "@fortawesome/free-regular-svg-icons";


const Tab = createBottomTabNavigator();

const HomeScreen = () => {

  return (
    <Tab.Navigator>
      {/*   Will make info screen later for home component instead of register     */}

      {/*   can change map into something else later    */}
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon icon={faUser}/>
          )
        }}/>
      <Tab.Screen 
        name="Map" 
        component={MapScreen} 
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon icon={faMap} />
          )
        }}/>
      <Tab.Screen 
        name="Leaderboards" 
        component={LeaderboardsScreen} 
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon icon={faListAlt} />
          )
        }}/>
    </Tab.Navigator>
  );
};

export default HomeScreen;
