import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

class Adicionar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            marginTop: 22,
            marginLeft: 150
          }}
        >
          Nova Tarefa
        </Text>
        <View style={{ marginLeft: 24, marginTop: 20 }}>
          <Text style={{ fontSize: 12, color: " #AEAEAE" }}>
            O que você está planejando fazer?
          </Text>
          <TextInput
            style={{
              borderLeftWidth: 1,
              height: 40,
              fontSize: 18,
              marginTop: 10
            }}
          />
        </View>
        <View style={{ marginLeft: 24, marginTop: 20 }}>
          <Text style={{ fontSize: 12, color: "#AEAEAE" }}>Que horário</Text>
          <Text style={{ fontSize: 30, color: "#4A6FFF" }}>12:00 AM</Text>
        </View>
        <View style={{ marginLeft: 24, marginTop: 20 }}>
          <Text style={{ fontSize: 12, color: "#AEAEAE" }}>
            Qual a prioridade?
          </Text>
          <View style={{ flexDirection: "row", marginBottom: 280 }}>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: "#1EAD5E",
                borderRadius: 10,
                marginTop: 10,
                marginRight: 10
              }}
            />
            <Text style={{ fontSize: 30, color: "#4A6FFF" }}>
              Muito importante
            </Text>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: 327,
              height: 59,
              backgroundColor: "#4A6FFF",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 22, fontWeight: "bold" }}>
              Salvar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // alignItems: "center"
  }
});

Adicionar.navigationOptions = {
  header: null
};
export default Adicionar;
