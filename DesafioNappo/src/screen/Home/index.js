import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
  Platform,
  PermissionsAndroid
} from "react-native";
import axios from "axios";

import firebase from "../../services/firebase";
import styles from "./style";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      clima: [],
      latitude: null,
      longitude: null
    };

    this.handleEdit = this.handleEdit.bind(this);

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

    // Pegando latitude e longitude do usuário

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.setState({
          latitude: latitude,
          longitude: longitude
        });
      }, // success
      () => {}, // erro
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000
      }
    );
  }

  async componentDidMount() {
    const response = await axios.get(
      `https://api.hgbrasil.com/weather?key=c1c0cb69&lat=${
        this.state.latitude
      }&log=${this.state.longitude}&user_ip=remote`
    );
    const { results } = response.data;

    this.setState({
      clima: results
    });
  }

  handleEdit(item) {
    this.props.navigation.navigate("Editar", item);
  }

  renderEdit(item) {
    return (
      <View style={styles.listTarefas} key={item.key}>
        <TouchableOpacity
          onPress={() => this.handleEdit(item.key)}
          style={styles.btnTarefas}
        >
          <View style={styles.viewBola} />
          <Text style={styles.textBtn}>{item.nome}</Text>
          <Text style={styles.hora}>{item.hora} ></Text>
        </TouchableOpacity>
      </View>
    );
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
            <Text style={styles.ensolarado}>
              {this.state.clima.description}
            </Text>
            <Text style={styles.graus}>{this.state.clima.temp}º</Text>
          </View>
          <FlatList
            data={this.state.task}
            keyExtractor={tasks => tasks.key}
            renderItem={({ item }) => this.renderEdit(item)}
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
