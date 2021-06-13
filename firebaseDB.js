import * as React from 'react';
import App from './App';
import firebase from '@react-native-firebase/app';
import Auth from '@react-native-firebase/auth';
//import firebase from 'firebase/app';
//import 'firebase/auth';
//require('firebase/auth');
import database from '@react-native-firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCQLuV_LwRltK0_m1Pzq_rM6_U5_iEzk8c",
  authDomain: "doctorcare-d3996.firebaseapp.com",
  databaseURL: "https://doctorcare-d3996-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "doctorcare-d3996",
  storageBucket: "doctorcare-d3996.appspot.com",
  messagingSenderId: "42191751235",
  appId: "1:42191751235:web:6c061415312192dcdcecf6",
  measurementId: "G-09MG8PFDZK"
};

//firebase.initializeApp(firebaseConfig);
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
//  else {
//     firebase.app(); // if already initialized, use that one
//   }

export { firebase, Auth, database};

// function firebaseDb() {
//   return <App />;
// }

// export default firebaseDb;