import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  HomeScreen,
  TransferScreen,
  PayBillsScreen,
  SavingsScreen,
  SpendingsScreen,
} from "../components/screens";

// Tab icons from Figma
const tabIcons = {
  Home: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/8sz7gopj_expires_30_days.png",
  Transfer:
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/2twme75q_expires_30_days.png",
  PayBills:
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/9fzpgnka_expires_30_days.png",
  Savings:
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/1dw7ythd_expires_30_days.png",
  Spendings:
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/8prtzodp_expires_30_days.png",
};

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#161519",
          borderTopWidth: 1,
          borderTopColor: "#2D2C31",
          height: 70,
          paddingBottom: 10,
          paddingTop: 8,
        },
        tabBarIcon: ({ focused }) => {
          const iconUrl = tabIcons[route.name];
          const isActive = focused;

          return (
            <View style={styles.tabItem}>
              <Image
                source={{ uri: iconUrl }}
                style={[
                  styles.tabIcon,
                  {
                    tintColor: isActive ? "#B2DB5E" : "#FFFFFF",
                    opacity: isActive ? 1 : 0.5,
                  },
                ]}
                resizeMode="stretch"
              />
              {isActive && <View style={styles.activeIndicator} />}
            </View>
          );
        },
        tabBarLabel: ({ focused }) => {
          const isActive = focused;
          return (
            <Text
              style={[
                styles.tabLabel,
                {
                  color: isActive ? "#B2DB5E" : "#FFFFFF",
                  opacity: isActive ? 1 : 0.5,
                },
              ]}
            >
              {route.name}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Transfer" component={TransferScreen} />
      <Tab.Screen name="PayBills" component={PayBillsScreen} />
      <Tab.Screen name="Savings" component={SavingsScreen} />
      <Tab.Screen name="Spendings" component={SpendingsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabIcon: {
    width: 24,
    height: 24,
    marginBottom: 3,
  },
  activeIndicator: {
    width: 18,
    height: 2,
    backgroundColor: "#B2DB5E",
    borderRadius: 1,
    marginTop: 2,
  },
  tabLabel: {
    fontSize: 9,
    marginTop: 2,
    fontWeight: "500",
  },
});
