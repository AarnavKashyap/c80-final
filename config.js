import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyAp_1GHM0XANmKdSVquTWPQu1cW1IWdbbI",
    authDomain: "booksantaapp-559e0.firebaseapp.com",
    databaseURL: "https://booksantaapp-559e0.firebaseio.com",
    projectId: "booksantaapp-559e0",
    storageBucket: "booksantaapp-559e0.appspot.com",
    messagingSenderId: "128928314983",
    appId: "1:128928314983:web:300e44e6c4d33df08186c2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();