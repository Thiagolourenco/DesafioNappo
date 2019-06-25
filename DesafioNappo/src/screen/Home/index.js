import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";

class Home extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../../assets/img/Home1.png")}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: "bold",
                fontFamily: "Helvetica Nueu",
                marginTop: 61,
                color: "#FFF",
                marginLeft: 24
              }}
            >
              Bom Dia!
            </Text>
            <Image
              source={require("../../assets/img/Imagem2.png")}
              style={{ width: 150, height: 180, marginLeft: 90, marginTop: 10 }}
            />
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              fontFamily: "Helvetica Nueu",
              marginTop: -40,
              marginLeft: 24,
              color: "#FFF"
            }}
          >
            Hoje o Dia Está
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                fontSize: 35,
                fontFamily: "Helvetica Nueu",
                marginLeft: 24,
                color: "#FFF",
                marginRight: 109
              }}
            >
              Ensolarado
            </Text>
            <Text
              style={{
                fontSize: 30,
                marginRight: 30,
                marginTop: -1,
                color: "#FFF",
                fontWeight: "bold"
              }}
            >
              23º
            </Text>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 40
            }}
          >
            <TouchableOpacity
              onPress={() => {}}
              style={{
                width: 327,
                height: 57,
                borderBottomWidth: 1,
                borderBottomColor: "#AEAEAE",
                borderLeftWidth: 1,
                borderLeftColor: "#AEAEAE",
                borderTopWidth: 1,
                borderTopColor: "#AEAEAE",
                borderRightWidth: 1,
                borderRightColor: "#AEAEAE",
                // shadowColor: "#CCC",
                backgroundColor: "#FFFFFF",
                borderRadius: 8,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: "#1EAD5E",
                  borderRadius: 10
                }}
              />
              <Text style={{ fontSize: 20 }}>Comprar Frutas</Text>
              <Text style={{ fontSize: 14, color: "#AEAEAE" }}>12:00 AM ></Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                width: 327,
                height: 57,
                borderBottomWidth: 1,
                borderBottomColor: "#AEAEAE",
                borderLeftWidth: 1,
                borderLeftColor: "#AEAEAE",
                borderTopWidth: 1,
                borderTopColor: "#AEAEAE",
                borderRightWidth: 1,
                borderRightColor: "#AEAEAE",
                // shadowColor: "#CCC",
                marginTop: 15,
                backgroundColor: "#FFFFFF",
                borderRadius: 8,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: "#1EAD5E",
                  borderRadius: 10
                }}
              />
              <Text style={{ fontSize: 20 }}>Comprar Frutas</Text>
              <Text style={{ fontSize: 14, color: "#AEAEAE" }}>12:00 AM ></Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                width: 327,
                height: 57,
                borderBottomWidth: 1,
                borderBottomColor: "#AEAEAE",
                borderLeftWidth: 1,
                borderLeftColor: "#AEAEAE",
                borderTopWidth: 1,
                borderTopColor: "#AEAEAE",
                borderRightWidth: 1,
                borderRightColor: "#AEAEAE",
                // shadowColor: "#CCC",
                marginTop: 15,
                backgroundColor: "#FFFFFF",
                borderRadius: 8,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: "#1EAD5E",
                  borderRadius: 10
                }}
              />
              <Text style={{ fontSize: 20 }}>Comprar Frutas</Text>
              <Text style={{ fontSize: 14, color: "#AEAEAE" }}>12:00 AM ></Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 90
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Adicionar")}
            >
              <Image
                source={require("../../assets/img/plus.png")}
                style={{ width: 60, height: 60 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

Home.navigationOptions = {
  header: null
};

export default Home;
