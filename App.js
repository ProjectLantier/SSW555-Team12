import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import './firebaseConfig';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import Navigator from './src/routes/homeStack';

import {
  LoginScreen,

} from './src/screens'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
