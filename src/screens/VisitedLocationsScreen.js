import React from "react";
import { SafeAreaView, View, Text } from "react-native";

const VisitedLocationsScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Visited Locations</Text>
        <Text style={styles.profileSectionDetails}>
          Tap to see more about this place!
          <TouchableOpacity
            style={styles.profileSection}
            onPress={() => "more deets"}
        ></TouchableOpacity>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default VisitedLocationsScreen;
