import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 3,
  },
  label: {
    color: "#FFFFFF",
    fontSize: 9,
  },
  activeLabel: {
    color: COLORS.accentGreen,
  },
  activeIndicator: {
    width: 18,
    height: 1,
    backgroundColor: COLORS.accentGreen,
    marginTop: 5,
  },
});
