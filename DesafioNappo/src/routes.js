import { createAppContainer, createStackNavigator } from "react-navigation";

import Home from "./screen/Home";
import Adicionar from "./screen/Add";
import Editar from "./screen/Edit";

const Navigator = createStackNavigator(
  {
    Home,
    Adicionar,
    Editar
  },
  { initialRouteName: "Home" }
);

export default createAppContainer(Navigator);
