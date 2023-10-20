import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
  },
  title: {
    marginBottom: 60,
    fontWeight: "bold",
    color: "#033dfc",
    fontSize: 25,
  },
  logo: {
    flex: 1,
    height: 120,
    width: 90,
    alignSelf: "center",
    margin: 30,
  },
  input: {
    height: 48,
    borderRadius: 10,
    borderColor: "#788eec",
    borderWidth: 1.5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    // marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    padding: 10,
    width: 200,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#788eec",
    marginTop: 30,
    height: 56,
    borderRadius: 10,
    width: 120,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: "#2e2e2d",
  },
  footerLink: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 16,
  },
});
