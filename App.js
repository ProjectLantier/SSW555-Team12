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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { AuthProvider } from "./src/context/AuthContext";

const Stack = createStackNavigator();

const getFonts = () => Font.loadAsync({});

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isloggedIn, setIsloggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // if (fontsLoaded) {
  //   return <Navigator />;
  // } else {

  useEffect(() => {
    const checkLogged = async () => {
      const isloggedIn = await AsyncStorage.getItem("isloggedIn");
      if (isloggedIn) {
        setIsloggedIn(true);
      }
      setIsLoading(false);
    };
    checkLogged().catch(console.error);
  }, []);

  if (isLoading) {
    return <></>;
  } else {
    return (
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={isloggedIn ? "HomeScreen" : "RegisterScreen"}
          >
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
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
      </AuthProvider>
    );
  }

  // }
};

export default App;
