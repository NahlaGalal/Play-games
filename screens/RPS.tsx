import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import Gradient from "../components/Gradient";
import Header from "../components/Header";
import { Colors } from "../enums/Colors";
import { Fonts } from "../enums/Fonts";

const RPS: React.FC<{
  navigation: any;
  route?: { params?: { results: number[] } };
}> = ({ navigation, route }) => {
  return (
    <View style={styles.screen}>
      <Gradient />
      <Header title="Rock Papper Scissors" />
      <View style={styles.contentContainer}>
        <Text style={styles.chooseSide}>Choose your side</Text>
        <View style={styles.btns}>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("playGame2", {
                userChoice: "paper",
                results: route?.params?.results || [0, 0, 0],
              })
            }
          >
            <View style={styles.btnContainer}>
              <Image source={require("../assets/images/paper.png")} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("playGame2", {
                userChoice: "rock",
                results: route?.params?.results || [0, 0, 0],
              })
            }
          >
            <View style={styles.btnContainer}>
              <Image source={require("../assets/images/Rock.png")} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("playGame2", {
                userChoice: "scissors",
                results: route?.params?.results || [0, 0, 0],
              })
            }
          >
            <View style={styles.btnContainer}>
              <Image source={require("../assets/images/Scissors.png")} />
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
    paddingHorizontal: 20,
  },
  btnContainer: {
    width: 120,
    height: 120,
    backgroundColor: Colors.backColor,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RPS;
