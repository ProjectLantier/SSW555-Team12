import React from "react";
import { SafeAreaView, ScrollView, View, Text, Button, StyleSheet } from "react-native";

const VisitedLocationsScreen = ({ navigation }) => {

  const dummyData = [
    { name: "abc", latitude: 123, longitude: 456, address: "123 main street", type: "resturant" },
    { name: "abc", latitude: 123, longitude: 456, address: "123 main street", type: "resturant" },
    { name: "abc", latitude: 123, longitude: 456, address: "123 main street", type: "resturant" },
    { name: "abc", latitude: 123, longitude: 456, address: "123 main street", type: "resturant" },
    { name: "abc", latitude: 123, longitude: 456, address: "123 main street", type: "resturant" },
    { name: "abc", latitude: 123, longitude: 456, address: "123 main street", type: "resturant" },
  ]

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Button
          title="Back"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}>Visited Locations</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {dummyData.map((location, index) => (
          <View key={index.toString()} style={styles.card}>
            <Text style={styles.cardText}>Name: {location.name}</Text>
            <Text style={styles.cardText}>Latitude: {location.latitude}</Text>
            <Text style={styles.cardText}>Longitude: {location.longitude}</Text>
            <Text style={styles.cardText}>Address: {location.address}</Text>
            <Text style={styles.cardText}>Type: {location.type}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 30
  },
  locationItem: {
    padding: 20,
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
    marginTop: 20
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'left',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    fontSize: 16,
  },
});

export default VisitedLocationsScreen;