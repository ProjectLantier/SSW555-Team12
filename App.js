import "./firebaseConfig";
import Navigator from "./src/routes/homeStack";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "./src/screens/RegisterScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import BadgeCollectionScreen from "./src/screens/BadgeCollectionScreen";
import VisitedLocationsScreen from "./src/screens/VisitedLocationsScreen";
import BadgeDetailsScreen from "./src/screens/BadgeDetailsScreen";
import VisitedLocationDetailsScreen from "./src/screens/VisitedLocationDetailsScreen";

const Stack = createStackNavigator();

const getFonts = () => Font.loadAsync({});

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // if (fontsLoaded) {
  //   return <Navigator />;
  // } else {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="BadgeCollectionScreen"
          component={BadgeCollectionScreen}
        />
        <Stack.Screen
          name="VisitedLocationsScreen"
          component={VisitedLocationsScreen}
        />
        <Stack.Screen
          name="BadgeDetailsScreen"
          component={BadgeDetailsScreen}
        />
        <Stack.Screen
          name="VisitedLocationDetailsScreen"
          component={VisitedLocationDetailsScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
  // }
};

export default App;
