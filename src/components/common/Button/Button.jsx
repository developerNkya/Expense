import React from "react";
import { Pressable, Text, ActivityIndicator } from "react-native";
import { styles } from "./Button.styles";
import { COLORS } from "../../../constants";

export const Button = ({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  isLoading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  style,
  ...props
}) => {
  const getVariantStyles = () => {
    const variants = {
      primary: {
        backgroundColor: COLORS.accentGreen,
        borderColor: COLORS.accentGreen,
        textColor: "#FFFFFF",
      },
      secondary: {
        backgroundColor: "transparent",
        borderColor: "#FFFFFF",
        textColor: "#FFFFFF",
      },
      outline: {
        backgroundColor: "transparent",
        borderColor: COLORS.accentGreen,
        textColor: COLORS.accentGreen,
      },
    };
    return variants[variant] || variants.primary;
  };

  const getSizeStyles = () => {
    const sizes = {
      small: { paddingVertical: 8, paddingHorizontal: 16, fontSize: 14 },
      medium: { paddingVertical: 12, paddingHorizontal: 24, fontSize: 16 },
      large: { paddingVertical: 16, paddingHorizontal: 32, fontSize: 18 },
    };
    return sizes[size] || sizes.medium;
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || isLoading}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: variantStyles.backgroundColor,
          borderColor: variantStyles.borderColor,
          opacity: pressed || disabled ? 0.7 : 1,
          paddingVertical: sizeStyles.paddingVertical,
          paddingHorizontal: sizeStyles.paddingHorizontal,
        },
        style,
      ]}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={variantStyles.textColor} />
      ) : (
        <>
          {leftIcon && <Text style={styles.leftIcon}>{leftIcon}</Text>}
          <Text
            style={[
              styles.text,
              {
                color: variantStyles.textColor,
                fontSize: sizeStyles.fontSize,
              },
            ]}
          >
            {title}
          </Text>
          {rightIcon && <Text style={styles.rightIcon}>{rightIcon}</Text>}
        </>
      )}
    </Pressable>
  );
};
