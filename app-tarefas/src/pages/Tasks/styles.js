import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logoutButton: {
    width: 40,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: {
    fontSize: 15,
    color: "#737380",
  },

  headerTextBold: {
    fontWeight: "bold",
  },

  description: {
    marginTop: 30,
    fontSize: 16,
    lineHeight: 24,
    color: "#737380",
  },

  tasksList: {
    marginTop: 32,
  },

  task: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    marginBottom: 16,
  },

  taskTitle: {
    fontSize: 14,
    color: "#41414D",
    fontWeight: "bold",
  },

  taskDescription: {
    marginTop: 8,
    fontSize: 15,
    color: "#737380",
  },

  boxDate: {
    width: 80,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 4,
    marginTop: 8,
    marginBottom: 24,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#E0E0E0",
  },

  taskDate: {
    fontSize: 14,
    color: "#737380",
    marginLeft: 8,
  },

  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  detailsButtonText: {
    color: "#0277BD",
    fontSize: 15,
    fontWeight: "bold",
  },

  boxDelete: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  deleteButton: {
    width: 40,
    height: 30,
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  boxButtonNewTask: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  buttonNewTask: {
    width: 60,
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 60,
    elevation: 4,
    marginBottom: 24,
    position: "relative",
  },
});
