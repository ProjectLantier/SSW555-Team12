import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
//import screens here

const screens = {
    Home: {
        screen: //home screen
    },
    LogIn: {
        screen: //login screen
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);