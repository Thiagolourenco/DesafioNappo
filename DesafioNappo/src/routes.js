import { createAppContainer, createStackNavigator } from "react-navigation";

import Home from "./screen/Home";
import Adicionar from "./screen/Add";

const Navigator = createStackNavigator(
  {
    Home,
    Adicionar
  },
  { initialRouteName: "Home" }
);

export default createAppContainer(Navigator);
