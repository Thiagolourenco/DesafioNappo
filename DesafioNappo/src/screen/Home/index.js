import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList
} from "react-native";

import firebase from "../../services/firebase";
import styles from "./style";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: []
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref("Tarefas")
      .on("value", snapshot => {
        let state = this.state;
        state.task = [];

        snapshot.forEach(childItem => {
          state.task.push({
            key: childItem.key,
            nome: childItem.val().nome,
            hora: childItem.val().hora,
            prioridade: childItem.val().prioridade
          });
        });

        this.setState(state);
      });
  }

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
          <FlatList
            data={this.state.task}
            keyExtractor={tasks => tasks.key}
            renderItem={({ item }) => (
              <View style={styles.listTarefas}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Editar")}
                  style={styles.btnTarefas}
                >
                  <View style={styles.viewBola} />
                  <Text style={styles.textBtn}>{item.nome}</Text>
                  <Text style={styles.hora}>{item.hora} ></Text>
                </TouchableOpacity>
              </View>
            )}
          />

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
