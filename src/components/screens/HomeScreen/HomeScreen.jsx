import React from "react";
import { View, Text, ScrollView, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { styles } from "./HomeScreen.styles";
import { COLORS } from "../../../constants";
import { Card } from "../../common/Card";
import { TransactionItem } from "../../common/TransactionItem";

import { transactions } from "../../../data/homeData";

export const HomeScreen = () => {
  const userData = {
    name: "Zaburi Frolian",
    avatar: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/all2nsu8_expires_30_days.png",
    profileImage: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/3h5pqh5z_expires_30_days.png",
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.stickyHeader}>
          <View style={styles.profileSection}>
            <View style={styles.userInfo}>
              <Image source={{ uri: userData.avatar }} style={styles.avatar} />
              <View>
                <Text style={styles.userName}>{userData.name}</Text>
                <View style={styles.seeMore}>
                  <Text style={styles.seeMoreText}>See more</Text>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/gugvyda8_expires_30_days.png",
                    }}
                    style={styles.arrowIcon}
                  />
                </View>
              </View>
            </View>

            <View style={styles.headerActions}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/3idzpdxh_expires_30_days.png",
                }}
                style={styles.notificationIcon}
              />
              <Image
                source={{ uri: userData.profileImage }}
                style={styles.profileImage}
              />
            </View>
          </View>
        </View>

        <View style={styles.balanceSection}>
          <Text style={styles.balanceLabel}>Card Balance</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceAmount}>$ 50,093.84</Text>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/u2vuryu0_expires_30_days.png",
              }}
              style={styles.cardIcon}
            />
          </View>
        </View>

        <View style={styles.cardContainer}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[COLORS.gradientStart, COLORS.gradientEnd]}
            style={styles.cardGradient}
          />
          <ImageBackground
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/ky4wjqx4_expires_30_days.png",
            }}
            style={styles.cardBackground}
            imageStyle={styles.cardBackgroundImage}
            resizeMode="stretch"
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/32h9hn1s_expires_30_days.png",
              }}
              style={styles.cardLogo}
            />
            <View style={styles.cardDetails}>
              <Text style={styles.cardNumber}>****5638</Text>
              <Text style={styles.cardExpiry}>4/25</Text>
            </View>
          </ImageBackground>
        </View>

        <Text style={styles.sectionTitle}>Spendings</Text>

        <Card style={styles.spendingCard}>
          <View>
            <Text style={styles.spendingAmount}>$5780.87</Text>
            <Text style={styles.spendingPeriod}>Last 30 Days</Text>
          </View>

          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/h8xhpaan_expires_30_days.png",
            }}
            style={styles.spendingChart}
          />

          <View style={styles.freezeCardWrapper}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/t8726o75_expires_30_days.png",
              }}
              style={styles.freezeIcon}
            />
            <Text style={styles.freezeText}>Freeze Card</Text>
          </View>
        </Card>

        <Text style={styles.sectionTitle}>Transactions</Text>

        <View style={styles.transactionsContainer}>
          {transactions.map((item) => (
            <TransactionItem key={item.id} {...item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};