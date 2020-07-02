import firebase from 'firebase';

  // FIREBASE CONFIG
  var firebaseConfig = {
    apiKey: "AIzaSyDr90EmzbiQa-ajkP3S9_vPT_hv7T6KRZg",
    authDomain: "lizardbellycollective-61b17.firebaseapp.com",
    databaseURL: "https://lizardbellycollective-61b17.firebaseio.com",
    projectId: "lizardbellycollective-61b17",
    storageBucket: "lizardbellycollective-61b17.appspot.com",
    messagingSenderId: "646654926427",
    appId: "1:646654926427:web:10ab78f0cd3184efd8e97e",
    measurementId: "G-P94FJEMKDB"
  };

  // INIT
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // FIRESTORE LOCATIONS
  export const fsArtists = firebase.firestore().collection('artists');
  export const fsEvents = firebase.firestore().collection('events');
  export const fsStorage = firebase.storage().ref();

  export default firebase;