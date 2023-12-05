import React from "react";
import { useState } from "react";
import { Alert, Button, Text, TextInput, SafeAreaView } from "react-native";
import { app } from "../../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import loginstyles from "./loginstyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginFunction = async () => {
    let worked = false;
    //Do firebase and auth stuff here
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        worked = true;
        const user = userCredential.user;
        console.log("User signed in: ", user);
        navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`${errorCode}: `, errorMessage);
        alert("Sign in failed: " + error.message);
      });
    if (worked) {
      try {
        await AsyncStorage.setItem("isloggedIn", "true");
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <SafeAreaView style={loginstyles.container}>
      <Text style={loginstyles.title}>Login:</Text>
      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={(x) => setUsername(x)}
        style={loginstyles.input}
      />
      <TextInput
        placeholder="Enter Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(x) => setPassword(x)}
        style={loginstyles.input}
      />
      <Button title="Log in" onPress={loginFunction} />
      <Text>Don't have an account?</Text>
      <Button
        title="Sign up"
        onPress={() => navigation.navigate("RegisterScreen")}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
