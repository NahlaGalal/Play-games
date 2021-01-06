import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Modal from "react-native-modal";
import Header from "../components/Header";
import { Colors } from "../enums/Colors";
import { Fonts } from "../enums/Fonts";

const playTic: React.FC<{
  navigation: any;
  route: { params: { userChoice: "X" | "O" } };
}> = ({
  navigation,
  route: {
    params: { userChoice },
  },
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [playGroundArr, setPlayGroundArr] = useState<string[][]>([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [currentTurn, setCurrentTurn] = useState<"player" | "bot">("player");
  const [currentResults, setCurrentResults] = useState<number[]>([0, 0, 0]);
  const [tieIndicator, setTieIndicator] = useState<boolean>(false);

  const botChoice = userChoice === "O" ? "X" : "O";
  const createPlayGround = () =>
    playGroundArr.map((row, i) => (
      <View style={styles.row} key={i}>
        {row.map((cell, j) =>
          cell ? (
            <Text style={styles.square}>{cell}</Text>
          ) : (
            <TouchableWithoutFeedback
              key={j}
              onPress={() =>
                checkSquare(
                  i,
                  j,
                  currentTurn === "player" ? userChoice : botChoice
                )
              }
            >
              <Text style={styles.square}>{cell}</Text>
            </TouchableWithoutFeedback>
          )
        )}
      </View>
    ));

  const checkSquare = (i: number, j: number, check: "X" | "O") => {
    const copyArr = [...playGroundArr.map((row) => [...row])];
    copyArr[i][j] = check;
    setPlayGroundArr(copyArr);
    const winner = checkWin(copyArr);
    if (!winner) setCurrentTurn(currentTurn === "bot" ? "player" : "bot");
  };

  const checkWin = (copyArr: string[][]) => {
    let win: boolean = false;
    // Rows
    if (
      copyArr.filter(
        (row: string[]) => row[0] && row[0] === row[1] && row[0] === row[2]
      ).length
    )
      win = true;
    // Axis
    else if (
      copyArr[0][0] &&
      copyArr[0][0] === copyArr[1][1] &&
      copyArr[0][0] === copyArr[2][2]
    )
      win = true;
    else if (
      copyArr[0][2] &&
      copyArr[0][2] === copyArr[1][1] &&
      copyArr[0][2] === copyArr[2][0]
    )
      win = true;
    // Columns
    else if (
      copyArr[0].filter(
        (cell: string, i: number) =>
          cell && cell === copyArr[1][i] && cell === copyArr[2][i]
      ).length
    )
      win = true;

    // Show Modal
    if (win) {
      setIsVisible(true);
      let copyResultsArr = [...currentResults];
      if (currentTurn === "bot") copyResultsArr[1]++;
      else copyResultsArr[0]++;
      setCurrentResults(copyResultsArr);
      return true;
    }

    // Tie
    let isTie = copyArr.filter((row) => row[0] && row[1] && row[2]);
    if (isTie.length === 3) {
      let copyResultsArr = [...currentResults];
      copyResultsArr[2]++;
      setCurrentResults(copyResultsArr);
      setTieIndicator(true);
      setIsVisible(true);
    }
    return false;
  };

  const restartGame = () => {
    setPlayGroundArr([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setCurrentTurn("player");
    setIsVisible(false);
  };

  return (
    <View style={styles.screen}>
      <Header title="Tic Tac Toe" />

      <View style={styles.contentContainer}>
        <View style={styles.resultsContainer}>
          <View style={styles.playerResult}>
            <Text style={styles.playerName}>You</Text>
            <Text style={styles.playerScore}>{currentResults[0]}</Text>
          </View>
          <View style={styles.playerResult}>
            <Text style={styles.playerName}>Bot</Text>
            <Text style={styles.playerScore}>{currentResults[1]}</Text>
          </View>
          <View style={styles.playerResult}>
            <Text style={styles.playerName}>Tie</Text>
            <Text style={styles.playerScore}>{currentResults[2]}</Text>
          </View>
        </View>

        <View style={styles.playGround}>{createPlayGround()}</View>

        <View style={styles.footer}>
          <Text style={styles.turn}>
            {currentTurn === "bot" ? "Bot's" : "Your"} turn
          </Text>
        </View>
      </View>

      <Modal
        isVisible={isVisible}
        onBackButtonPress={() => navigation.navigate("Game1")}
      >
        <View style={styles.gameOver}>
          <LinearGradient
            colors={[Colors.secondaryColor, Colors.lightColor]}
            style={styles.gradient}
          />
          <Text style={styles.winner}>
            {tieIndicator
              ? "It's tie"
              : currentTurn === "bot"
              ? "Bot wins"
              : "You win"}
          </Text>
          <TouchableWithoutFeedback onPress={restartGame}>
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
    marginTop: 16,
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
