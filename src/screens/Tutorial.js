import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const slides = [
  {
    key: 1,
    title: 'Profile Page',
    text: 'Access profile page to view username, adventure level, collected badges, and visited locations!',
    image: require('../../public/TutorialImages/ProfilePage.png'),
    colors: ['#63E2FF', '#B066FE'],
  },
  {
    key: 2,
    title: 'Interactive Map',
    text: 'Use our interactive map to see potential places to visit and embark on a new adventure!',
    image: require('../../public/TutorialImages/MapScreen.png'),
    colors: ['#A3A1FF', '#3A3897'],
  },
  {
    key: 3,
    title: 'Leaderboard',
    text: 'See how you rank amongst your peers and decide who is the most adventurous!',
    image: require('../../public/TutorialImages/Leaderboards.png'),
    colors: ['#A3A1FF', '#3A3897'],
  },
  {
    key: 4,
    title: 'Badge Collection',
    text: 'View the badges that you have collected throughout your journey!',
    image: require('../../public/TutorialImages/BadgeScreen.png'),
    colors: ['#A3A1FF', '#3A3897'],
  },
  {
    key: 5,
    title: 'Visited Locations',
    text: 'View the locations that you already visited so you can keep track of your adventures!',
    image: require('../../public/TutorialImages/VisitedLocations.png'),
    colors: ['#A3A1FF', '#3A3897'],
  },
];

const Tutorial = () => {
    const [showApp, setShowApp] = useState(false);
    const navigation = useNavigation();

    const onDone = () => {
        setShowApp(true);
        navigation.navigate('HomeScreen');
    }

    const onSkip = () => {
        setShowApp(true);
        navigation.navigate('HomeScreen');
    }

    const renderItems = ({item}) => {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#33afff',
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingBottom: 50,
                }}>
                <Text style={styles.title}>
                    {item.title}
                </Text>
                <Image 
                    style={styles.image}
                    source={item.image}
                    resizeMode="contain"
                />
                <Text style={styles.text}>
                    {item.text}
                </Text>
            </View>
        );
    };

    return (
        <>
            <AppIntroSlider 
                data={slides}
                renderItem = {renderItems}
                onDone={onDone}
                showSkipButton={true}
                onSkip={onSkip}
            />
        </>
    );
  };

const styles = StyleSheet.create({
    mainContent: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: "#788eec",
    },
    image: {
      width: "80%",
      height: "55%",
    },
    text: {
      color: 'white',
      backgroundColor: 'transparent',
      paddingHorizontal: 30,
      fontSize: 20,
      marginBottom: 40,
    },
    title: {
      fontSize: 32,
      color: '#033dfc',
      fontWeight: "bold",
      backgroundColor: 'transparent',
      textAlign: 'center',
      marginBottom: 0,
      marginTop: 20,
    }
  });

  export default Tutorial;
  