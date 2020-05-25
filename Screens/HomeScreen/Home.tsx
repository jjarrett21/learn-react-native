import React, { FC, useState } from "react";
import { Text, View, Button } from "react-native";
import { styles } from "./styles";
import { Header } from "../../Components/Header";
import PlayArrowIcon from "mdi-react/PlayArrowIcon";

export const Home: FC = () => {
  const [pressPlay, setPressPlay] = useState<boolean>(false);

  const handePlayPress = () => {
    setPressPlay(true);
  };

  return (
    <View style={styles.contaienr}>
      <Header />
      <Button title="play" onPress={handePlayPress}>
        <PlayArrowIcon size={11} color={"#2e856e"} /> PLAY!
      </Button>
    </View>
  );
};
