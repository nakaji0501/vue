import firebase from "firebase";

const config = {
    apiKey: "AIzaSyB9RfJ4nwO6M-NNgMDcox19W1195j2NBVA",
    authDomain: "vuefolio0501.firebaseapp.com",
    databaseURL: "https://vuefolio0501.firebaseio.com",
    projectId: "vuefolio0501",
    storageBucket: "vuefolio0501.appspot.com",
    messagingSenderId: "393780546965",
    appId: "1:393780546965:web:cfc2a3fcc1ea69d6d5ba9c",
    measurementId: "G-409J7WVVPS"
  };
firebase.initializeApp(config);
export const functions = firebase.functions();