import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import Gradient from "../components/Gradient";
import Header from "../components/Header";
import { Colors } from "../enums/Colors";
import { Fonts } from "../enums/Fonts";

const Home: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Gradient />
      <Header title="Choose a Game" />
      <View style={styles.btnsCenter}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("Game1");
          }}
        >
          <View style={styles.btnContainer}>
            <Text style={styles.btn}>Tic-Tac-Toe</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View style={styles.btnContainer}>
            <Text style={styles.btn}>Rock-Papper-Scissors</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  btnsCenter: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 175,
    height: 40,
    backgroundColor: Colors.backColor,
    borderRadius: 20,
    marginVertical: 12,
  },
  btn: {
    color: Colors.secondaryColor,
    fontSize: 16,
    fontFamily: Fonts.mainFont,
  },
});

export default Home;
