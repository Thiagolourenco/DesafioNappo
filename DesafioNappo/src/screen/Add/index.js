import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class Adicionar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});

Adicionar.navigationOptions = {
  header: null
};
export default Adicionar;
