import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBmyphWht5EJqw2Gy3YFGLTqG1pIdSufLk",
  authDomain: "ouoccasionally-e7121.firebaseapp.com",
  projectId: "ouoccasionally-e7121",
  storageBucket: "ouoccasionally-e7121.appspot.com",
  messagingSenderId: "154918355746",
  appId: "1:154918355746:web:7bc4444c0ad8d714f25b7b",
  measurementId: "G-NWQYD1CHFD",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
