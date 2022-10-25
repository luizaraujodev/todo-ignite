import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
  },
  containerForm: {
    padding: 24,
    marginTop: -110,
  },
  containerLogo: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 50,
    marginBottom: 20,
    backgroundColor: "#0D0D0D",
    width: "100%",
    height: 150,
  },
  input: {
    backgroundColor: "#1f1e25",
    backgroundRadius: 5,
    height: 56,
    fontFamily: "Inter_400Regular",
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 12,
  },
  buttonText: {
    color: "#FFF",
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  containerNumberTasks: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  containerNumber: { flexDirection: "row" },
  textCreated: {
    color: "#4EA8DE",
    fontFamily: "Inter_700Bold",
  },
  textDone: {
    color: "#8284FA",
    fontFamily: "Inter_700Bold",
  },
  numberTasksContainer: {
    backgroundColor: "#333333",
    borderRadius: 50,
    width: 35,
    color: "#FFF",
    marginLeft: 10,
    fontFamily: "Inter_700Bold",
    textAlign: "center",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  listEmpty: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: "#333333",
    borderTopWidth: 1,
  },
  listEmptyImage: {
    marginTop: 50,
  },
  listEmptyText: {
    color: "#808080",
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Inter_400Regular",
  },
  listEmptyTextBold: {
    marginTop: 15,
    color: "#808080",
    fontFamily: "Inter_700Bold",
    fontSize: 14,
    textAlign: "center",
  },
});
