import React, { FC, useState } from "react";
import { Text, View, Button, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Header } from "../../Components/Header";
import PlayArrowIcon from "mdi-react/PlayArrowIcon";

export const Home: FC = () => {
  const [pressPlay, setPressPlay] = useState<boolean>(false);

  const handePlayPress = () => {
    setPressPlay(true);
  };

  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity
        onPress={handePlayPress}
        style={{ alignItems: "center", width: "100%" }}
      >
        <Image
          source={require("../../assets/play-button.png")}
          style={styles.playIcon}
        />
        {/* <Text style={styles.play}>PLAY!</Text> */}
      </TouchableOpacity>
    </View>
  );
};
