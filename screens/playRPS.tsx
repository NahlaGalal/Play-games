import React, { useRef } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Header from "../components/Header";
import { Colors } from "../enums/Colors";
import { Fonts } from "../enums/Fonts";

type TChoice = "paper" | "rock" | "scissors";

const playRPS: React.FC<{
  navigation: any;
  route: { params: { userChoice: TChoice; results: number[] } };
}> = ({
  navigation,
  route: {
    params: { userChoice, results },
  },
}) => {
  const resultRef = useRef<number[]>(results);

  const choices: TChoice[] = ["paper", "rock", "scissors"];
  const botChoice = choices[Math.floor(Math.random() * 3)];

  const generateImageSrc = (choice: TChoice) => {
    if (choice === "paper") return require("../assets/images/paper.png");
    else if (choice === "rock") return require("../assets/images/Rock.png");
    else return require("../assets/images/Scissors.png");
  };

  const generateResult = () => {
    if (userChoice === botChoice) {
      resultRef.current[2]++;
      return "It's tie";
    }
    if (
      (userChoice === "scissors" && botChoice === "paper") ||
      (userChoice === "paper" && botChoice === "rock") ||
      (userChoice === "rock" && botChoice === "scissors")
    ) {
      resultRef.current[0]++;
      return "You win";
    }
    resultRef.current[1]++;
    return "Bot wins";
  };

  return (
    <View style={styles.screen}>
      <Header title="Tic Tac Toe" />

      <View style={styles.contentContainer}>
        <View style={styles.resultsContainer}>
          <View style={styles.playerResult}>
            <Text style={styles.playerName}>You</Text>
            <Text style={styles.playerScore}>{resultRef.current[0]}</Text>
          </View>
          <View style={styles.playerResult}>
            <Text style={styles.playerName}>Bot</Text>
            <Text style={styles.playerScore}>{resultRef.current[1]}</Text>
          </View>
          <View style={styles.playerResult}>
            <Text style={styles.playerName}>Tie</Text>
            <Text style={styles.playerScore}>{resultRef.current[2]}</Text>
          </View>
        </View>

        <View style={styles.playGround}>
          <View>
            <Text style={styles.player}>Your choice</Text>
            <Image source={generateImageSrc(userChoice)} />
          </View>
          <View>
            <Text style={styles.player}>Bot's choice</Text>
            <Image source={generateImageSrc(botChoice)} />
          </View>
        </View>

        <View>
          <Text style={styles.gameResult}>{generateResult()}</Text>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("Game2", { results: resultRef.current })
            }
          >
            <View style={styles.btnContainer}>
              <Text style={styles.btn}>Play again</Text>
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
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    paddingHorizontal: 24,
    marginTop: 100,
    marginBottom: 40,
  },
  player: {
    fontSize: 16,
    color: Colors.secondaryColor,
    marginBottom: 16,
  },
  gameResult: {
    color: Colors.warningColor,
    fontSize: 40,
    fontFamily: Fonts.boldFont,
  },
  btnContainer: {
    height: 40,
    width: 133,
    backgroundColor: Colors.lightColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 24,
  },
  btn: {
    color: Colors.mainColor,
  },
});

export default playRPS;
