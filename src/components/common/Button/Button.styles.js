import { StyleSheet } from "react-native";
import { BORDER_RADIUS } from "../../../constants";

export const styles = StyleSheet.create({
  button: {
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 48,
    flexDirection: "row",
  },
  text: {
    fontWeight: "600",
    textAlign: "center",
  },
  leftIcon: {
    marginRight: 8,
  },
  rightIcon: {
    marginLeft: 8,
  },
});
