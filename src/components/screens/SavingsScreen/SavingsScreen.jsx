import React, { useRef, useEffect } from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { styles } from "./SavingsScreen.styles";

export const SavingsScreen = () => {
  // Entrance animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const slideUpAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();

    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      tension: 50,
      useNativeDriver: true,
    }).start();

    Animated.timing(slideUpAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const members = [
    { 
      name: "Janet Janet", 
      amount: "$2,000", 
      avatar: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/nwfb5jxu_expires_30_days.png",
      progress: "25%"
    },
    { 
      name: "Emmanuel Emmanuel", 
      amount: "$5,800", 
      avatar: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/h2a5jduj_expires_30_days.png",
      progress: "55%"
    },
    { 
      name: "Christina E", 
      amount: "$9,500", 
      avatar: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/imf4yrox_expires_30_days.png",
      progress: "85%"
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar style="light" backgroundColor="#222126" />

      <Animated.ScrollView
        style={{
          flex: 1,
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }, { translateY: slideUpAnim }],
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* ============================================
            HEADER SECTION - No phone status bar
        ============================================ */}
        <View style={styles.headerContainer}>
          <ImageBackground
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/i2wjr8t5_expires_30_days.png",
            }}
            style={styles.headerBackground}
            resizeMode="stretch"
          >
            <View style={styles.headerOverlay}>
              {/* Header Nav */}
              <View style={styles.headerNav}>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/xi5uw176_expires_30_days.png",
                  }}
                  style={styles.headerIcon}
                  resizeMode="stretch"
                />
                <Text style={styles.headerTitle}>My Savings</Text>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/041ty8l9_expires_30_days.png",
                  }}
                  style={styles.headerIcon}
                  resizeMode="stretch"
                />
              </View>

              {/* Center Icon */}
              <View style={styles.centerIcon}>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/2qn8yvuw_expires_30_days.png",
                  }}
                  style={styles.centerIconImage}
                  resizeMode="stretch"
                />
              </View>

              {/* Total Label */}
              <View style={styles.totalLabel}>
                <Text style={styles.totalLabelText}>Total Saving</Text>
              </View>

              {/* Total Amount */}
              <View style={styles.totalAmount}>
                <Text style={styles.totalAmountText}>$ 10,000.89</Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* ============================================
            SAVINGS SECTION
        ============================================ */}
        <View style={styles.savingsHeader}>
          <Text style={styles.savingsHeaderTitle}>Savings</Text>
          <Text style={styles.addGoalText}>Add new goal</Text>
        </View>

        {/* Savings Card */}
        <View style={styles.savingsCardWrapper}>
          <View style={styles.cardShadow1} />
          <View style={styles.cardShadow2} />
          <View style={styles.savingsCard}>
            <TouchableOpacity
              style={styles.emojiButton}
              onPress={() => alert("Trip to Zanzibar")}
            >
              <Text style={styles.emojiText}>🏝️</Text>
            </TouchableOpacity>

            <View style={styles.cardContent}>
              <View style={styles.cardRow}>
                <Text style={styles.cardTitle}>Trip to Zanzibar</Text>
                <Text style={styles.cardAmount}>$ 800</Text>
              </View>

              <View style={styles.cardMeta}>
                <Text style={styles.cardMetaText}>10 Days left</Text>
                <Text style={styles.cardMetaText}>-$200</Text>
              </View>

              <View style={styles.progressBarTrack}>
                <View style={[styles.progressBarFill, { width: "75%" }]} />
              </View>
            </View>
          </View>
        </View>

        {/* ============================================
            GROUP SAVINGS
        ============================================ */}
        <Text style={styles.groupTitle}>Group savings</Text>

        <View style={styles.groupContainer}>
          <View style={styles.groupHeader}>
            <View>
              <Text style={styles.groupName}>Friends Club Wallet</Text>
              <Text style={styles.groupAmount}>$ 10,000.89</Text>
            </View>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/7jt3k9yl_expires_30_days.png",
              }}
              style={styles.groupIcon}
              resizeMode="stretch"
            />
          </View>

          <View style={styles.membersContainer}>
            {members.map((member, index) => (
              <View key={index} style={styles.memberItem}>
                <View style={styles.memberInner}>
                  <Image
                    source={{ uri: member.avatar }}
                    style={styles.memberAvatar}
                    resizeMode="stretch"
                  />
                  <View style={styles.memberInfo}>
                    <View style={styles.memberRow}>
                      <Text style={styles.memberAmount}>{member.amount}</Text>
                      <Text style={styles.memberName}>{member.name}</Text>
                    </View>
                    <View style={styles.memberProgressTrack}>
                      <View 
                        style={[
                          styles.memberProgressFill, 
                          { width: member.progress }
                        ]} 
                      />
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={{ height: 20 }} />
      </Animated.ScrollView>
    </SafeAreaView>
  );
};