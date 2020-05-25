import React, { FC, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Routes from "./Screens/Routes";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import { StatusBar } from "react-native";

const App: FC = () => {
  // const [fontLoaded] = useFonts({
  //   dogbyte: require("./assets/fonts/dogbyte.otf"),
  // });

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Routes />
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
