import {
  View,
  StyleSheet,
  Alert,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import RegistrationStyle from "../styles/RegistrationStyle";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { db } from "../../firebaseConfig";
import { ref, set } from "firebase/database";

const RegisterScreen = ({ navigation }) => {
  async function register(email, password) {
    let worked = false;
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("yippee", user);
        navigation.navigate("HomeScreen");
        worked = true;
        const usersRef = ref(db, `users/${user.uid}`);
        set(usersRef, {
          email: user.email,
          adventureLevel: 0,
        });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
    if (worked) {
      try {
        await AsyncStorage.setItem("isloggedIn", "true");
      } catch (e) {
        console.log(e);
      }
    }
  }

  const MyButton = ({ title, onPress, buttonStyle, textStyle }) => (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );

  let email = "";
  let password = "";

  function setEmail(val) {
    email = val;
  }

  function setPassword(val) {
    password = val;
  }

  return (
    <View style={RegistrationStyle.container}>
      <Text style={RegistrationStyle.subheading}>Welcome to:</Text>
      <Text style = {RegistrationStyle.title}>Sticker Smash!</Text>
      <TextInput
        style={RegistrationStyle.input}
        placeholder="Email"
        onChangeText={(val) => setEmail(val)}
      />
      <TextInput
        style={RegistrationStyle.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(val) => setPassword(val)}
      />
      <MyButton
        title="Sign Up"
        onPress={() => register(email, password)}
        buttonStyle={RegistrationStyle.button}
        textStyle={RegistrationStyle.buttonTitle}
      />

      <Text style={{marginBottom: 20}}>Already have an account?</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate("LoginScreen")}
      />
    </View>
  );
};

export default RegisterScreen;
