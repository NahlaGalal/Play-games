import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../enums/Colors";
import { Fonts } from "../enums/Fonts";

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 100,
  },
  headerText: {
    color: Colors.mainColor,
    fontSize: 40,
    fontFamily: Fonts.headerFont,
    textAlign: "center"
  },
});

export default Header;
