import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

import firebase from "../../services/firebase";
import styles from "./style";

class Adicionar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      hora: "",
      prioridade: ""
    };

    this.handleCadastrar = this.handleCadastrar.bind(this);
  }

  handleCadastrar() {
    if (this.state.nome.length > 0) {
      let tarefa = firebase.database().ref("Tarefas");
      let chave = tarefa.push().key;

      tarefa.child(chave).set({
        nome: this.state.nome,
        hora: this.state.hora
      });
    }

    setTimeout(() => {
      this.props.navigation.goBack();
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.title}>Editar Tarefa</Text>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              source={require("../../assets/img/Grupo7.png")}
              style={styles.btnClose}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.viewOq}>
          <Text style={styles.titulo}>O que você está planejando fazer?</Text>
          <TextInput
            style={styles.textInputE}
            onChangeText={nome => this.setState({ nome })}
          />
        </View>
        <View style={styles.viewOq}>
          <Text style={styles.titulo}>Que horário</Text>
          <TextInput
            style={styles.valor}
            onChangeText={hora => this.setState({ hora })}
          />
        </View>
        <View style={styles.viewOq}>
          <Text style={styles.titulo}>Qual a prioridade?</Text>
          <View style={styles.viewsB}>
            <View style={styles.bola} />
            <Text style={styles.valor}>Muito importante</Text>
          </View>
        </View>
        <View style={styles.btnApagar}>
          <TouchableOpacity
            onPress={this.handleCadastrar}
            style={styles.btnSalvar}
          >
            <Text style={styles.btnText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Adicionar.navigationOptions = {
  header: null
};

export default Adicionar;
