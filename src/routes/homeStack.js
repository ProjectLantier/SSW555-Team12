import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
//import screens here
import Login from "../screens/Login.js";

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
