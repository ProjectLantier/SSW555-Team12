import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
//import screens here
import {
    LoginScreen,
  
  } from '../screens'

const screens = {
    // Home: {
    //     screen: //home screen
    // },
    LogIn: {
        screen: LoginScreen
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);