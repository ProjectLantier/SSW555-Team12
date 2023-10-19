import "./firebaseConfig";
import Navigator from "./src/routes/homeStack";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "./src/screens/RegisterScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";

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
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // }
};

export default App;
