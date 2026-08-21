import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../constants";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222126", // Changed from #18171C to match header
  },

  // ============================================
  // HEADER SECTION
  // ============================================

  headerContainer: {
    height: 309,
    backgroundColor: "#222126",
    marginBottom: 4,
  },

  headerBackground: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    flex: 1,
    paddingTop: 0, // Changed from 5 to 0
  },

  // Dark overlay over background image
  headerOverlay: {
    flex: 1,
    backgroundColor: "rgba(34, 33, 38, 0.92)",
    paddingTop: 5, // Moved padding here
  },

  // Header nav - moved up slightly
  headerNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 23,
    marginHorizontal: 16,
    marginTop: 5, // Reduced from 20
  },

  headerIcon: {
    width: 40,
    height: 44,
    borderRadius: 8,
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 18,
  },

  // Center content
  centerIcon: {
    alignItems: "center",
    marginBottom: 14,
  },

  centerIconImage: {
    width: 104,
    height: 37,
  },

  totalLabel: {
    alignItems: "center",
    marginBottom: 7,
  },

  totalLabelText: {
    color: "#FFFFFF",
    fontSize: 12,
  },

  totalAmount: {
    alignItems: "center",
    marginBottom: 56,
  },

  totalAmountText: {
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "bold",
  },

  // ============================================
  // SAVINGS SECTION
  // ============================================

  savingsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 29,
    marginHorizontal: 16,
    marginTop: 8,
  },

  savingsHeaderTitle: {
    color: "#FFFFFF",
    fontSize: 18,
  },

  addGoalText: {
    color: "#FFFFFF",
    fontSize: 14,
  },

  // ============================================
  // SAVINGS CARD
  // ============================================

  savingsCardWrapper: {
    paddingBottom: 41,
    marginBottom: 27,
    marginHorizontal: 16,
  },

  cardShadow1: {
    position: "absolute",
    bottom: 0,
    right: 20,
    left: 20,
    height: 106,
    backgroundColor: "#222126",
    borderColor: "#2D2C31",
    borderRadius: 14,
    borderWidth: 1,
    shadowColor: "#1018280D",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 11,
    elevation: 11,
  },

  cardShadow2: {
    position: "absolute",
    bottom: 20,
    right: 8,
    left: 8,
    height: 106,
    backgroundColor: "#222126",
    borderColor: "#2D2C31",
    borderRadius: 14,
    borderWidth: 1,
    shadowColor: "#0000004F",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 24,
    elevation: 24,
  },

  savingsCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222126",
    borderColor: "#2D2C31",
    borderRadius: 14,
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 18,
    shadowColor: "#0000004F",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 24,
    elevation: 24,
  },

  emojiButton: {
    backgroundColor: "#DFF9AF",
    borderRadius: 8,
    paddingVertical: 13,
    paddingHorizontal: 18,
    marginRight: 14,
  },

  emojiText: {
    color: "#000000",
    fontSize: 40,
  },

  cardContent: {
    flex: 1,
  },

  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
  },

  cardTitle: {
    color: "#FFFFFF",
    fontSize: 14,
  },

  cardAmount: {
    color: "#FFFFFF",
    fontSize: 14,
  },

  cardMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 7,
    marginHorizontal: 2,
  },

  cardMetaText: {
    color: "#FFFFFF",
    fontSize: 10,
  },

  progressBarTrack: {
    backgroundColor: "#FFFFFF1A",
    borderRadius: 19,
    height: 11,
  },

  progressBarFill: {
    height: 11,
    backgroundColor: "#B2DB5E",
    borderRadius: 19,
  },

  // ============================================
  // GROUP SAVINGS
  // ============================================

  groupTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    marginBottom: 23,
    marginLeft: 16,
  },

  groupContainer: {
    backgroundColor: "#B2DB5E",
    borderRadius: 11,
    paddingVertical: 12,
    marginBottom: 17,
    marginHorizontal: 16,
  },

  groupHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 17,
    marginHorizontal: 16,
  },

  groupName: {
    color: "#18171C",
    fontSize: 14,
    marginBottom: 10,
    marginRight: 21,
  },

  groupAmount: {
    color: "#18171C",
    fontSize: 24,
    fontWeight: "bold",
  },

  groupIcon: {
    width: 39,
    height: 39,
    borderRadius: 26,
  },

  membersContainer: {
    marginHorizontal: 14,
  },

  memberItem: {
    backgroundColor: "#18171C1A",
    borderRadius: 33,
    marginBottom: 10,
    paddingVertical: 4,
  },

  memberInner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#627834",
    borderRadius: 33,
    paddingVertical: 6,
    paddingRight: 12,
  },

  memberAvatar: {
    width: 38,
    height: 38,
    borderRadius: 42,
    marginRight: 7,
  },

  memberInfo: {
    flex: 1,
    paddingRight: 8,
  },

  memberRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  memberAmount: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },

  memberName: {
    color: "#FFFFFF",
    fontSize: 10,
  },

  memberProgressTrack: {
    backgroundColor: "#FFFFFF1A",
    borderRadius: 19,
    height: 6,
    marginTop: 4,
    width: "100%",
    overflow: "hidden",
  },

  memberProgressFill: {
    height: 6,
    backgroundColor: "#B2DB5E",
    borderRadius: 19,
  },
});
