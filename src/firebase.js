import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAafasGptUuWBixvvgtioBrTi_PFcf7plY",
  authDomain: "m-city-7e089.firebaseapp.com",
  databaseURL: "https://m-city-7e089-default-rtdb.firebaseio.com",
  projectId: "m-city-7e089",
  storageBucket: "m-city-7e089.appspot.com",
  messagingSenderId: "143828726822",
  appId: "1:143828726822:web:0bc943456d823b3309a2e7",
  measurementId: "G-6MXGGH315V",
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");
const firebaseTeams = firebaseDB.ref("teams");
const firebasePlayers = firebaseDB.ref("players");

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebasePlayers,
  firebaseDB,
};
