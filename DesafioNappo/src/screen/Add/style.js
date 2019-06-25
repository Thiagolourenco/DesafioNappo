import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 22,
    marginLeft: 150,
    marginRight: 90
  },
  btnClose: {
    width: 20,
    height: 20,
    marginTop: 28
  },
  viewOq: {
    marginLeft: 24,
    marginTop: 20
  },
  textInputE: {
    borderLeftWidth: 1,
    height: 55,
    fontSize: 30,
    marginTop: 10,
    color: "#4A6FFF"
  },
  valor: {
    fontSize: 30,
    color: "#4A6FFF"
  },
  titulo: {
    fontSize: 12,
    color: "#AEAEAE"
  },
  viewsB: {
    flexDirection: "row",
    marginBottom: 240
  },
  bola: {
    width: 20,
    height: 20,
    backgroundColor: "#1EAD5E",
    borderRadius: 10,
    marginTop: 10,
    marginRight: 10
  },
  btnSalvar: {
    width: 327,
    height: 59,
    backgroundColor: "#4A6FFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  btnText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold"
  },
  btnApagar: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
