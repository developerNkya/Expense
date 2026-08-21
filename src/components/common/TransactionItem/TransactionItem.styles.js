import { StyleSheet } from "react-native";
import { SPACING } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.md,
  },
  icon: {
    width: 45,
    height: 45,
    borderRadius: 31,
    marginRight: SPACING.md,
  },
  info: {
    flex: 1,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 14,
    marginBottom: 6,
  },
  meta: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    color: "#FFFFFF",
    fontSize: 10,
    marginRight: 5,
  },
  dot: {
    width: 3,
    height: 3,
    backgroundColor: "#FFFFFF",
    borderRadius: 1.5,
    marginRight: 4,
  },
  time: {
    color: "#FFFFFF",
    fontSize: 10,
  },
  amount: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});
