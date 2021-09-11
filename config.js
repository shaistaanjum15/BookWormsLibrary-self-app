import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyB73VCrbwDTU5K6u8KZIhM5aKfdvUplUpI",
    authDomain: "kavya-app-1c7e1.firebaseapp.com",
    databaseURL: "https://kavya-app-1c7e1-default-rtdb.firebaseio.com",
    projectId: "kavya-app-1c7e1",
    storageBucket: "kavya-app-1c7e1.appspot.com",
    messagingSenderId: "196322531514",
    appId: "1:196322531514:web:f4fab16440a9c770f34a83"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();