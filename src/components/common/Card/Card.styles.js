import { StyleSheet } from "react-native";
import { BORDER_RADIUS, COLORS } from "../../../constants";

export const styles = StyleSheet.create({
  card: {
    borderRadius: BORDER_RADIUS.lg,
    backgroundColor: COLORS.surface,
    borderColor: COLORS.surfaceBorder,
    borderWidth: 1,
    padding: 16,
  },
});
