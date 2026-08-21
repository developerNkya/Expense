import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  Animated,
  Easing,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { styles } from "./TransferScreen.styles";

export const TransferScreen = () => {
  const [amount, setAmount] = useState("500.10");

  // Animation values - entrance only
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.7)).current;
  const slideUpAnim = useRef(new Animated.Value(30)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const [recipient] = useState({
    name: "Naomi Mwakyusa",
    account: "***00730 WSA",
    avatar:
      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/emchdcz8_expires_30_days.png",
  });

  useEffect(() => {
    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();

    // Scale entrance animation
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      tension: 50,
      useNativeDriver: true,
    }).start();

    // Slide up animation
    Animated.timing(slideUpAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.out(Easing.back(1.5)),
      useNativeDriver: true,
    }).start();

    // Rotate animation (subtle, only for send button icon)
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const handleKeyPress = (value) => {
    if (value === "delete") {
      setAmount((prev) => prev.slice(0, -1) || "0");
      return;
    }

    if (amount.replace(/[^0-9.]/g, "").length >= 10) return;

    if (value === "." && amount.includes(".")) return;

    if (amount === "0" && value !== ".") {
      setAmount(value);
      return;
    }

    setAmount((prev) => prev + value);
  };

  const handleSend = () => {
    Alert.alert("Confirm Transfer", `Send $${amount} to ${recipient.name}?`, [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Send",
        onPress: () =>
          Alert.alert("Success", `$${amount} sent to ${recipient.name}!`),
      },
    ]);
  };

  // Rotate interpolation
  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const keypadRows = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    [".", "0", "delete"],
  ];

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar style="light" />

      <Animated.ScrollView
        style={[
          { flex: 1 },
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }, { translateY: slideUpAnim }],
          },
        ]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={styles.content}>
          {/* ============================================
              HEADER
          ============================================ */}
          <View style={styles.header}>
            <View style={styles.headerLeft} />

            <Text style={styles.headerTitle}>Send Money</Text>

            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/uivq8cuc_expires_30_days.png",
              }}
              style={styles.headerIcon}
              resizeMode="contain"
            />
          </View>

          {/* ============================================
              CONTACT AVATARS
          ============================================ */}
          <View style={styles.contactsRow}>
            {/* Left avatar */}
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/gg3501hl_expires_30_days.png",
              }}
              style={[styles.contactAvatarSmall, styles.contactAvatarLeft]}
              resizeMode="cover"
            />

            {/* Left-middle avatar */}
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/v0nwwpq3_expires_30_days.png",
              }}
              style={[styles.contactAvatarSmall, styles.contactAvatarLeft]}
              resizeMode="cover"
            />

            {/* Center avatar - green ring with fading green fill */}
            <View style={styles.contactAvatarCenterWrapper}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/8751bx1s_expires_30_days.png",
                }}
                style={styles.contactAvatarCenter}
                resizeMode="cover"
              />
            </View>

            {/* Right-middle avatar */}
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/0oattoqm_expires_30_days.png",
              }}
              style={[styles.contactAvatarSmall, styles.contactAvatarRight]}
              resizeMode="cover"
            />

            {/* Right avatar */}
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/0k2x2q81_expires_30_days.png",
              }}
              style={[styles.contactAvatarSmall, styles.contactAvatarRight]}
              resizeMode="cover"
            />
          </View>

          {/* ============================================
              SEND TO
          ============================================ */}
          <View style={styles.sendToContainer}>
            <Text style={styles.sendToLabel}>Send to</Text>

            <View style={styles.sendToRow}>
              {/* Recipient */}
              <View style={styles.recipientInfo}>
                <Image
                  source={{ uri: recipient.avatar }}
                  style={styles.recipientAvatar}
                  resizeMode="cover"
                />

                <View style={styles.recipientDetails}>
                  <Text style={styles.recipientName}>{recipient.name}</Text>

                  <View style={styles.recipientAccount}>
                    <Text style={styles.recipientAccountText}>
                      {recipient.account}
                    </Text>

                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/0m6xl7x4_expires_30_days.png",
                      }}
                      style={styles.recipientAccountIcon}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              </View>

              {/* Edit recipient */}
              <TouchableOpacity
                style={styles.editInfo}
                activeOpacity={0.7}
                onPress={() =>
                  Alert.alert("Edit Info", "Recipient information")
                }
              >
                <Text style={styles.editInfoText}>Edit Info</Text>

                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/nsf46kv6_expires_30_days.png",
                  }}
                  style={styles.editInfoIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* ============================================
              AMOUNT
          ============================================ */}
          <View style={styles.amountContainer}>
            <Text style={styles.amountText}>$ {amount}</Text>
          </View>

          {/* ============================================
              KEYPAD
          ============================================ */}
          <View style={styles.keypadContainer}>
            {keypadRows.map((row, rowIndex) => (
              <View key={`row-${rowIndex}`} style={styles.keypadRow}>
                {row.map((key, keyIndex) => {
                  const isLast = keyIndex === row.length - 1;
                  const isDelete = key === "delete";

                  return (
                    <TouchableOpacity
                      key={key}
                      style={[styles.keyButton, isLast && styles.keyButtonLast]}
                      activeOpacity={0.65}
                      onPress={() => handleKeyPress(key)}
                    >
                      {isDelete ? (
                        <Image
                          source={{
                            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/y07ypyz2_expires_30_days.png",
                          }}
                          style={styles.deleteIcon}
                          resizeMode="contain"
                        />
                      ) : (
                        <Text style={styles.keyText}>{key}</Text>
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            ))}
          </View>

          {/* ============================================
              SEND BUTTON
          ============================================ */}
          <View style={styles.sendButtonContainer}>
            <TouchableOpacity
              style={styles.sendButton}
              activeOpacity={0.8}
              onPress={handleSend}
            >
              <Animated.Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/6ddqncw6_expires_30_days.png",
                }}
                style={[
                  styles.sendButtonIcon,
                  { transform: [{ rotate: rotateInterpolate }] },
                ]}
                resizeMode="contain"
              />

              <Text style={styles.sendButtonText}>Send ${amount}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};
