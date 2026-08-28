import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingBottom: 100,
  },

  stickyHeader: {
    backgroundColor: COLORS.background,
    paddingTop: 16,
    paddingBottom: 4,
    borderBottomWidth: 0,
    zIndex: 10,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginHorizontal: 20,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 8,
  },
  userName: {
    color: COLORS.textPrimary,
    fontSize: 12,
    marginBottom: 4,
  },
  seeMore: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  seeMoreText: {
    color: COLORS.textPrimary,
    fontSize: 10,
    marginRight: 6,
  },
  arrowIcon: {
    width: 12,
    height: 12,
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationIcon: {
    width: 25,
    height: 25,
    marginRight: 28,
  },
  profileImage: {
    width: 40,
    height: 44,
    borderRadius: 8,
  },

  balanceSection: {
    marginHorizontal: 20,
    marginTop: 8,
  },
  balanceLabel: {
    color: COLORS.textPrimary,
    fontSize: 10,
    marginBottom: 8,
  },
  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  balanceAmount: {
    color: COLORS.textPrimary,
    fontSize: 36,
    fontWeight: "bold",
  },
  cardIcon: {
    width: 50,
    height: 50,
  },

  cardContainer: {
    marginHorizontal: 20,
    marginBottom: 28,
  },
  cardGradient: {
    height: 192,
    borderRadius: 17,
  },
  cardBackground: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    paddingTop: 11,
    paddingRight: 21,
  },
  cardBackgroundImage: {
    borderRadius: 17,
  },
  cardLogo: {
    width: 69,
    height: 38,
    borderRadius: 17,
    marginBottom: 102,
    marginLeft: 21,
  },
  cardDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 23,
    marginLeft: 21,
  },
  cardNumber: {
    color: COLORS.textPrimary,
    fontSize: 14,
  },
  cardExpiry: {
    color: COLORS.textPrimary,
    fontSize: 14,
  },

  sectionTitle: {
    color: COLORS.textPrimary,
    fontSize: 18,
    marginBottom: 16,
    marginLeft: 20,
  },

  spendingCard: {
    marginHorizontal: 18,
    marginBottom: 28,
    paddingVertical: 18,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  spendingAmount: {
    color: COLORS.textPrimary,
    fontSize: 24,
    marginBottom: 6,
  },
  spendingPeriod: {
    color: COLORS.textPrimary,
    fontSize: 12,
  },
  spendingChart: {
    width: 72,
    height: 40,
    borderRadius: 10,
    marginLeft: 13,
  },

  freezeCardWrapper: {
    marginLeft: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  freezeIcon: {
    width: 31,
    height: 25,
    borderRadius: 10,
    marginBottom: 7,
  },
  freezeText: {
    color: COLORS.accentGreen,
    fontSize: 12,
  },

  transactionsContainer: {
    marginHorizontal: 20,
  },
});