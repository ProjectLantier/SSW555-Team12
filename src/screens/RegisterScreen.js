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

const RegisterScreen = ({ navigation }) => {
  function register(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("yippee", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
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
      <Text style={RegistrationStyle.title}>Welcome to our app!</Text>
      {/* <StatusBar/> */}
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

      <Text>Already have an account?</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate("LoginScreen")}
      />
    </View>
  );
};

export default RegisterScreen;
