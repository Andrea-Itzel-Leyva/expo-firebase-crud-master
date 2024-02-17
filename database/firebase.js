import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD7gYRrLQMXA0QzOkwB2MoP2f7FWAEWzQY",
  authDomain: "react-native-firebase-34cd9.firebaseapp.com",
  databaseURL: "https://react-native-firebase-34cd9.firebaseio.com",
  projectId: "react-native-firebase-34cd9",
  storageBucket: "react-native-firebase-34cd9.appspot.com",
  messagingSenderId: "306021641472",
  appId: "1:306021641472:web:c3782a8760e9cd7de597e5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
