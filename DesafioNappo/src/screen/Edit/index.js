import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

import firebase from "../../services/firebase";
import styles from "./style";

class Editar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      nome: "",
      hora: "",
      prioridade: ""
    };

    this.handleRemove = this.handleRemove.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleRemove(key) {
    setTimeout(() => {
      firebase
        .database()
        .ref("Tarefas")
        .child(key)
        .remove();
      this.props.navigation.goBack();
    }, 3000);
  }

  handleUpdate(key) {
    setTimeout(() => {
      firebase
        .database()
        .ref("Tarefas")
        .child(key)
        .update({
          nome: this.state.nome,
          hora: this.state.hora,
          prioridade: this.state.prioridade
        });
      this.props.navigation.goBack();
    }, 3000);
  }

  render() {
    const params = this.props.navigation.state.params;
    return (
      <ScrollView style={styles.container}>
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
            <TextInput
              style={styles.valor}
              onChangeText={prioridade => this.setState({ prioridade })}
            />
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            onPress={() => this.handleRemove(params)}
            style={styles.btnApagar}
          >
            <Text style={styles.textApagar}>Apagar Tarefa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.handleUpdate(params)}
            style={styles.btnSalvar}
          >
            <Text style={styles.btnText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

Editar.navigationOptions = {
  header: null
};
export default Editar;
