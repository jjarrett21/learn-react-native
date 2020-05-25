import {
  createSwitchNavigator,
  createAppContainer,
  createNavigator,
} from "react-navigation";
import { Home } from "./HomeScreen/Home";

export const SwitchNavigator = createSwitchNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: "Home",
  }
);

export default createAppContainer(SwitchNavigator);
