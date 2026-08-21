import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../constants";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17161B",
  },

  content: {
    flex: 1,
    paddingTop: 4,
  },

  // ============================================
  // HEADER
  // ============================================

  header: {
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 2,
    marginBottom: 9,
  },

  headerLeft: {
    width: 34,
    height: 34,
  },

  headerTitle: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },

  headerIcon: {
    width: 34,
    height: 34,
    borderRadius: 8,
  },

  // ============================================
  // CONTACT AVATARS
  // ============================================

  contactsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 13,
    paddingHorizontal: 4,
  },

  contactAvatarSmall: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: -3,
    borderWidth: 0,
  },

  contactAvatarLeft: {
    zIndex: 1,
  },

  contactAvatarRight: {
    zIndex: 1,
  },

  // Center avatar with green ring and fading green fill
  contactAvatarCenterWrapper: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 3,
    borderColor: "#B2DB5E",
    backgroundColor: "rgba(178, 219, 94, 0.25)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    marginHorizontal: 4,
  },

  contactAvatarCenter: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  // ============================================
  // SEND TO CARD
  // ============================================

  sendToContainer: {
    backgroundColor: "#211F24",
    borderColor: "#2B2930",
    borderWidth: 1,
    borderRadius: 7,
    paddingTop: 12,
    paddingBottom: 10,
    paddingRight: 12,
    marginHorizontal: 21,
    marginBottom: 39,
  },

  sendToLabel: {
    color: "#8B8990",
    fontSize: 12,
    fontWeight: "500",
    marginLeft: 16,
    marginBottom: 8,
  },

  sendToRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 15,
    minHeight: 50,
  },

  recipientInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  recipientAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  recipientDetails: {
    flex: 1,
    justifyContent: "center",
  },

  recipientName: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 3,
  },

  recipientAccount: {
    flexDirection: "row",
    alignItems: "center",
  },

  recipientAccountText: {
    color: "#77757C",
    fontSize: 12,
    marginRight: 4,
  },

  recipientAccountIcon: {
    width: 18,
    height: 18,
  },

  editInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
  },

  editInfoText: {
    color: "#B2DB5E",
    fontSize: 12,
    fontWeight: "500",
    marginRight: 4,
  },

  editInfoIcon: {
    width: 14,
    height: 14,
  },

  // ============================================
  // AMOUNT
  // ============================================

  amountContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
  },

  amountText: {
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "600",
    letterSpacing: -0.7,
  },

  // ============================================
  // KEYPAD
  // ============================================

  keypadContainer: {
    paddingHorizontal: 17,
    marginBottom: 18,
  },

  keypadRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  keyButton: {
    flex: 1,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222126",
    borderColor: "#2A292E",
    borderWidth: 1,
    borderRadius: 11,
    marginRight: 7,
  },

  keyButtonLast: {
    marginRight: 0,
  },

  keyText: {
    color: "#F7F7F8",
    fontSize: 28,
    fontWeight: "500",
  },

  // Delete button - larger icon matching numbers
  deleteIcon: {
    width: 42,
    height: 42,
  },

  // ============================================
  // SEND BUTTON
  // ============================================

  sendButtonContainer: {
    alignItems: "center",
    marginTop: -1,
    marginBottom: 10,
  },

  sendButton: {
    height: 52,
    width: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B2EB4B",
    borderRadius: 5,
  },

  sendButtonIcon: {
    width: 18,
    height: 18,
    marginRight: 6,
  },

  sendButtonText: {
    color: "#202019",
    fontSize: 14,
    fontWeight: "700",
  },
});
