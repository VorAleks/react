import firebase from  "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDGwKQ2XX88T6yqTkQLHd8rsNO_lM5wbuo",
  authDomain: "fir-react-l9.firebaseapp.com",
  databaseURL: "https://fir-react-l9-default-rtdb.firebaseio.com",
  projectId: "fir-react-l9",
  storageBucket: "fir-react-l9.appspot.com",
  messagingSenderId: "10720120572",
  appId: "1:10720120572:web:ba28c1ff3feadf91a35179"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

export const db = firebaseDB.database().ref();
export const auth = firebase.auth();