import React from "react";
import { useState } from "react";
import { Alert, Button, Text, TextInput, SafeAreaView } from "react-native";
import { app } from "../../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import loginstyles from "./loginstyles";

const LoginScreen = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginFunction = async () => {
    //Do firebase and auth stuff here
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in: ", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`${errorCode}: `, errorMessage);
        alert("Sign in failed: " + error.message);
      });
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
    </SafeAreaView>
  );
};

export default LoginScreen;
