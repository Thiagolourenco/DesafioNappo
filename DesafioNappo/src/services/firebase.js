import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZNQqvSBG3vTVrzhIBfEpyFwLvgCeJqy0",
  authDomain: "desafionappotasks.firebaseapp.com",
  databaseURL: "https://desafionappotasks.firebaseio.com",
  projectId: "desafionappotasks",
  storageBucket: "",
  messagingSenderId: "487325199156",
  appId: "1:487325199156:web:4c2ceae4391d70a0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
