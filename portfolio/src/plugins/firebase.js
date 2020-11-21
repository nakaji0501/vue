import firebase from "firebase";

const config = {
  // apiKey: "xxxxxx",
  authDomain: "vuefolio.firebaseapp.com",
  // databaseURL: "xxxxxx.firebaseio.com",
  projectId: "vuefolio0501",
  // storageBucket: "xxxxxx.appspot.com",
  // messagingSenderId: "xxxxxx"
};
firebase.initializeApp(config);
export const functions = firebase.functions();
