import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";

import styles from "./style";

class Home extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../../assets/img/Home.png")}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.titulo}>Bom Dia!</Text>
            <Image
              source={require("../../assets/img/Imagem2.png")}
              style={styles.imgSol}
            />
          </View>
          <Text style={styles.subTitulo}>Hoje o Dia Está</Text>
          <View style={styles.ensoGra}>
            <Text style={styles.ensolarado}>Ensolarado</Text>
            <Text style={styles.graus}>23º</Text>
          </View>

          <View style={styles.listTarefas}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Editar")}
              style={styles.btnTarefas}
            >
              <View style={styles.viewBola} />
              <Text style={styles.textBtn}>Comprar Frutas</Text>
              <Text style={styles.hora}>12:00 AM ></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnView}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Adicionar")}
            >
              <Image
                source={require("../../assets/img/plus.png")}
                style={styles.imgBtn}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

Home.navigationOptions = {
  header: null
};

export default Home;
