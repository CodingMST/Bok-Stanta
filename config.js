import firebase from 'firebase'
require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyCoC8Suj2sQDRSYRs5gvGEEMGHqLSE3htQ",
    authDomain: "bok-stanta.firebaseapp.com",
    projectId: "bok-stanta",
    storageBucket: "bok-stanta.appspot.com",
    messagingSenderId: "533122190244",
    appId: "1:533122190244:web:f77fc3b5950ae749c18f31"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()
    
  