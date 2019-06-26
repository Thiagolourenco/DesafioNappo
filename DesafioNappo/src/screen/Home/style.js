import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Helvetica Nueu",
    marginTop: 61,
    color: "#FFF",
    marginLeft: 24
  },
  imgSol: {
    width: 150,
    height: 180,
    marginLeft: 90,
    marginTop: 10
  },
  subTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Helvetica Nueu",
    marginTop: -40,
    marginLeft: 24,
    color: "#FFF"
  },
  ensoGra: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30
  },
  ensolarado: {
    fontSize: 35,
    fontFamily: "Helvetica Nueu",
    marginLeft: 24,
    color: "#FFF",
    marginRight: 109
  },
  graus: {
    fontSize: 30,
    marginRight: 30,
    marginTop: -1,
    color: "#FFF",
    fontWeight: "bold"
  },
  listTarefas: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
  btnTarefas: {
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
  },
  viewBola: {
    width: 20,
    height: 20,
    backgroundColor: "#1EAD5E",
    borderRadius: 10
  },
  textBtn: {
    fontSize: 20
  },
  hora: {
    fontSize: 14,
    color: "#AEAEAE"
  },
  btnView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 90,
    marginBottom: 24
  },
  imgBtn: {
    width: 60,
    height: 60
  }
});

export default styles;
