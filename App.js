import "./firebaseConfig";
import Navigator from "./src/routes/homeStack";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LoginScreen } from "./src/screens";
import Register from "./src/screens/Register";
import Profile from "./src/screens/Profile";

const Tab = createBottomTabNavigator();

const getFonts = () => Font.loadAsync({});

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Register} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
