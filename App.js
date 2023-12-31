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
import Tutorial from "./src/screens/Tutorial";

const Stack = createStackNavigator();

const getFonts = () => Font.loadAsync({});

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isloggedIn, setIsloggedIn] = useState(false);
  const [firstTime, setFirstTime] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [initalRouteName, setInitialRouteName] = useState("RegisterScreen");
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

    const checkFirstTime = async () => {
      const firstTime = await AsyncStorage.getItem("firstTime");
      console.log(firstTime)
      if (!firstTime || firstTime == "false") {
        setFirstTime(true);
      } else {
        setFirstTime(false);
      }
    }
    checkFirstTime().catch(console.error);

    if (isloggedIn && firstTime) {
      setInitialRouteName("Tutorial");
    } else if (isloggedIn) {
      setInitialRouteName("HomeScreen");
    } else {
      setInitialRouteName("RegisterScreen");
    }
  }, []);

  if (isLoading) {
    return <></>;
  } else {
    return (
      <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={initalRouteName}
          >
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="Tutorial" component={Tutorial}/>
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
        </AuthProvider>
      </NavigationContainer>
    );
  }

  // }
};

export default App;
