import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

import styles from "./style";

class Adicionar extends Component {
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
          <TextInput style={styles.textInputE} />
        </View>
        <View style={styles.viewOq}>
          <Text style={styles.titulo}>Que horário</Text>
          <Text style={styles.valor}>12:00 AM</Text>
        </View>
        <View style={styles.viewOq}>
          <Text style={styles.titulo}>Qual a prioridade?</Text>
          <View style={styles.viewsB}>
            <View style={styles.bola} />
            <Text style={styles.valor}>Muito importante</Text>
          </View>
        </View>
        <View style={styles.btnApagar}>
          <TouchableOpacity onPress={() => {}} style={styles.btnSalvar}>
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
