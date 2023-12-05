import React from "react";
import { useState } from "react";
import { Alert, Button, Text, TextInput, View, TouchableOpacity} from "react-native";
import { app } from "../../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import RegistrationStyle from "../styles/RegistrationStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const MyButton = ({ title, onPress, buttonStyle, textStyle }) => (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );

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
        const userErrorMessage = "Invalid credentials."
        console.error(`${errorCode}: `, errorMessage);
        alert("Sign in failed: " + userErrorMessage);
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
    <View style={RegistrationStyle.container}>
      <Text style={RegistrationStyle.title}>Enjoy your new adventure!</Text>
      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={(x) => setUsername(x)}
        style={RegistrationStyle.input}
      />
      <TextInput
        placeholder="Enter Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(x) => setPassword(x)}
        style={RegistrationStyle.input}
      />
      <MyButton 
        title="Log in" 
        onPress={loginFunction} 
        buttonStyle={RegistrationStyle.button}
        textStyle={RegistrationStyle.buttonTitle}
      />
      <Text style={{marginBottom: 20}}>Don't have an account?</Text>
      <Button
        title="Sign up"
        onPress={() => navigation.navigate("RegisterScreen")}
      />
    </View>
  );
};

export default LoginScreen;
