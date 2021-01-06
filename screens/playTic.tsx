import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Modal from "react-native-modal";
import Header from "../components/Header";
import { Colors } from "../enums/Colors";
import { Fonts } from "../enums/Fonts";

const playTic: React.FC<{ navigation: any; route: any }> = ({
  navigation,
  route: {
    params: { userChoice },
  },
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <View style={styles.screen}>
      <Header title="Tic Tac Toe" />

      <View style={styles.contentContainer}>
        <View style={styles.resultsContainer}>
          <View style={styles.playerResult}>
            <Text style={styles.playerName}>You</Text>
            <Text style={styles.playerScore}>5</Text>
          </View>
          <View style={styles.playerResult}>
            <Text style={styles.playerName}>Bot</Text>
            <Text style={styles.playerScore}>5</Text>
          </View>
          <View style={styles.playerResult}>
            <Text style={styles.playerName}>Tie</Text>
            <Text style={styles.playerScore}>5</Text>
          </View>
        </View>

        <View style={styles.playGround}>
          <View style={styles.row}>
            <TouchableWithoutFeedback>
              <Text style={styles.square}>X</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Text style={styles.square}>O</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Text style={styles.square}></Text>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.row}>
            <TouchableWithoutFeedback>
              <Text style={styles.square}></Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Text style={styles.square}></Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Text style={styles.square}></Text>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.row}>
            <TouchableWithoutFeedback>
              <Text style={styles.square}></Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Text style={styles.square}></Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Text style={styles.square}></Text>
            </TouchableWithoutFeedback>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.turn}>Your turn</Text>
        </View>
      </View>

      <Modal
        isVisible={isVisible}
        onBackButtonPress={() => navigation.navigate("Game1")}
        onBackdropPress={() => setIsVisible(false)}
      >
        <View style={styles.gameOver}>
          <LinearGradient
            colors={[Colors.secondaryColor, Colors.lightColor]}
            style={styles.gradient}
          />
          <Text style={styles.winner}>Bot wins</Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Game1")}
          >
            <View style={styles.playAgainContainer}>
              <Text style={styles.playAgain}>Play again</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backColor,
  },
  contentContainer: {
    alignItems: "center",
    flex: 1,
  },
  resultsContainer: {
    width: "100%",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 80,
  },
  playerResult: {
    alignItems: "center",
  },
  playerName: {
    fontSize: 16,
    color: Colors.mainColor,
  },
  playerScore: {
    fontSize: 24,
    color: Colors.secondaryColor,
  },
  playGround: {
    borderTopColor: Colors.secondaryColor,
    borderTopWidth: 1,
    borderRightColor: Colors.secondaryColor,
    borderRightWidth: 1,
    width: 207,
    marginVertical: 100,
  },
  row: {
    width: "100%",
    height: 69,
    flexDirection: "row",
  },
  square: {
    width: 69,
    height: 69,
    borderBottomColor: Colors.secondaryColor,
    borderBottomWidth: 1,
    borderLeftColor: Colors.secondaryColor,
    borderLeftWidth: 1,
    color: Colors.lightColor,
    fontSize: 32,
    fontFamily: Fonts.boldFont,
    textAlign: "center",
    textAlignVertical: "center",
  },
  footer: {
    marginTop: "auto",
    backgroundColor: Colors.lightColor,
    width: "100%",
    height: 40,
    justifyContent: "center",
  },
  turn: {
    color: Colors.mainColor,
    textAlign: "center",
  },
  gameOver: {
    width: 275,
    height: 176,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 24,
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 176,
    borderRadius: 20,
  },
  winner: {
    color: Colors.backColor,
    fontSize: 40,
    fontFamily: Fonts.boldFont,
  },
  playAgainContainer: {
    backgroundColor: Colors.backColor,
    width: 133,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  playAgain: {
    color: Colors.secondaryColor,
  },
});

export default playTic;
