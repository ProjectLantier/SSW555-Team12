import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer } from "@react-navigation/native";
//import screens here
import Login from "../screens/LoginScreen.js";

const screens = {
  // Home: {
  //     screen: //home screen
  // },
  LogIn: {
    screen: Login,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
