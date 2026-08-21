import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./TabBarItem.styles";

export const TabBarItem = ({ icon, label, isActive = false }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: icon }} style={styles.icon} />
      <Text style={[styles.label, isActive && styles.activeLabel]}>
        {label}
      </Text>
      {isActive && <View style={styles.activeIndicator} />}
    </View>
  );
};
