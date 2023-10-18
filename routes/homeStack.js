import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const screens = {
    Home: {
        screen: 
    },
    LogIn: {
        screen: 
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);