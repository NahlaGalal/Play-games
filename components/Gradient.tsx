import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../enums/Colors";

const Gradient = () => {
  return (
    <LinearGradient
      colors={[Colors.backColor, Colors.secondaryColor]}
      style={styles.gradient}
    />
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});

export default Gradient;
