import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBNvM7tM5WUzjqSqq8aVs5alDvkv4bEVn8",
  authDomain: "fb-team-8f84d.firebaseapp.com",
  databaseURL: "https://fb-team-8f84d.firebaseio.com",
  projectId: "fb-team-8f84d",
  storageBucket: "fb-team-8f84d.appspot.com",
  messagingSenderId: "151126422402"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();

// get matches from database
const firebaseMatches = firebaseDB.ref("matches");

export { firebaseDB, firebaseMatches };
