import firebase from "firebase";

const config = {
  apiKey: "AIzaSyABhMgsQ-cVVXt57HXJVebAjpUVPOjHYs4",
  authDomain: "turnout-1396a.firebaseapp.com",
  databaseURL: "https://turnout-1396a.firebaseio.com",
  projectId: "turnout-1396a",
  storageBucket: "turnout-1396a.appspot.com",
  messagingSenderId: "390396090430"
};

export const firebaseApp = firebase.initializeApp(config);
export const eventsRef = firebaseApp
  .database()
  .ref()
  .child("events");
