import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 20,
    flexDirection: "row",
  },
  heading: {
    fontSize: 36,
    fontWeight: "bold",
  },
  badgeDetailsContainer: {
    flex: 4,
    justifyContent: "center",
    flexDirection: "row",
  },
});