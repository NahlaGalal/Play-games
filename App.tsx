import React from "react";
import { useFonts } from "@use-expo/font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";

const Stack = createStackNavigator();

export default function App() {
  const customFonts = {
    LatoBold: require("./assets/fonts/Lato-Bold.ttf"),
    LatoRegular: require("./assets/fonts/Lato-Regular.ttf"),
    PermanentMarker: require("./assets/fonts/PermanentMarker-Regular.ttf"),
  };

  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) return <AppLoading />;

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Main screen" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
