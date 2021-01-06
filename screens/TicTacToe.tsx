import React from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Gradient from "../components/Gradient";
import Header from "../components/Header";
import { Colors } from "../enums/Colors";
import { Fonts } from "../enums/Fonts";

const TicTacToe: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Gradient />
      <Header title="Tic Tac Toe" />
      <View style={styles.contentContainer}>
        <Text style={styles.chooseSide}>Choose your side</Text>
        <View style={styles.btns}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("playGame1", { userChoice: "x" })}
          >
            <View style={styles.btnContainer}>
              <Text style={styles.btn}>X</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("playGame1", { userChoice: "o" })}
          >
            <View style={styles.btnContainer}>
              <Text style={styles.btn}>O</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  chooseSide: {
    color: Colors.mainColor,
    fontSize: 24,
    fontFamily: Fonts.boldFont,
  },
  btns: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    marginTop: 40,
  },
  btnContainer: {
    width: 120,
    height: 120,
    backgroundColor: Colors.backColor,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    fontSize: 90,
    color: Colors.secondaryColor,
    fontFamily: Fonts.headerFont,
  },
});

export default TicTacToe;
