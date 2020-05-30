import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCrLQsMwi7tUTBJakwZSuso2LyiYUI5OZA",
    authDomain: "lizardbellycollective-61b17.firebaseapp.com",
    databaseURL: "https://lizardbellycollective-61b17.firebaseio.com",
    projectId: "lizardbellycollective-61b17",
    storageBucket: "lizardbellycollective-61b17.appspot.com",
    messagingSenderId: "646654926427",
    appId: "1:646654926427:web:10ab78f0cd3184efd8e97e",
    measurementId: "G-P94FJEMKDB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;