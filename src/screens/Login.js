import React from "react";
import { useState } from "react";
import { Alert, Button, Text, TextInput } from "react-native";
import { app } from "../../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import loginstyles from "./loginstyles";

const Login = () => {
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
    <>
      <Text>Login:</Text>
      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={(x) => setUsername(x)}
      />
      <TextInput
        placeholder="Enter Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(x) => setPassword(x)}
      />
      <Button title="Log in" onPress={loginFunction} />
    </>
  );
};

export default Login;
