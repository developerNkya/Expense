import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./TransactionItem.styles";

export const TransactionItem = ({ icon, title, date, time, amount }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: icon }} style={styles.icon} />

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.meta}>
          <Text style={styles.date}>{date}</Text>
          <View style={styles.dot} />
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>

      <Text style={styles.amount}>-{amount}</Text>
    </View>
  );
};
