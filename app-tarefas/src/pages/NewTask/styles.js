import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  task: {
    padding: 24,
    borderRadius: 8,
    marginBottom: 16,
    marginTop: 48,
  },

  taskTitle: {
    fontSize: 24,
    color: "#41414D",
    fontWeight: "bold",
  },

  taskDescription: {
    marginTop: 8,
    fontSize: 16,
    color: "#737380",
  },

  taskPlace: {
    marginTop: 15,
  },

  boxDate: {
    width: 100,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 4,
    marginTop: 34,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#E0E0E0",
  },

  taskDate: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0277BD",
    marginLeft: 8,
  },

  taskHour: {
    fontSize: 14,
    color: "#737380",
    marginLeft: 8,
  },

  boxButtonSave: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 34,
  },

  saveButton: {
    width: 120,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 4,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#0277BD",
    elevation: 2,
  },

  saveButtonText: {
    color: "#0277BD",
    fontSize: 15,
  },
});
