import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    padding: 64,

    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },

  headerText: {
    fontSize: 15,
    color: "#737380",
  },

  containerInput: {
    marginTop: 0,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  boxInput: {
    width: Dimensions.get("window").width - 50,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },

  iconInput: {
    color: "#0277BD",
    marginLeft: 60,
  },

  input: {
    width: Dimensions.get("window").width - 50,
    height: 50,
    fontWeight: "bold",
    color: "#313131",
    fontSize: 18,
    marginLeft: 20,
    paddingRight: 60,
  },

  enterButton: {
    width: 220,
    height: 50,
    backgroundColor: "#0277BD",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 40,
    marginBottom: 12,
  },

  enterButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  registerButton: {
    width: 220,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  registerButtonText: {
    fontSize: 13,
    color: "#313131",
    marginLeft: 10,
  },
});
