<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import './firebaseConfig';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import Navigator from './src/routes/homeStack';
=======
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
>>>>>>> main

const Stack = createStackNavigator();

const getFonts = () => Font.loadAsync({});

<<<<<<< HEAD
const getFonts = () => Font.loadAsync({

})

function register(email, password) {
  const auth =  getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log('yippee', user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      // ..
    });
}

let email = "";
let password = "";

function setEmail(val) {
  email = val;
}

function setPassword(val) {
  password = val;
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Navigator />
    )
  } else {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <TextInput
          style={styles.input}
          placeholder='Email'
          onChangeText={(val) => setEmail(val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={(val) => setPassword(val)}
        />
        <Button
          title='Sign Up'
          onPress={() => register(email, password)}
        />
      </View>
    );
  }
}
=======
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
        <Stack.Screen
          name="BadgeCollectionScreen"
          component={BadgeCollectionScreen}
        />
        <Stack.Screen
          name="VisitedLocationsScreen"
          component={VisitedLocationsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // }
};
>>>>>>> main

export default App;
