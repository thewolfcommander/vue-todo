import firebase from 'firebase'
import firestore from 'firebase/firestore'


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCY1zjzLtB4fkaIeZoUcXKlS1PMgDhs8u8",
  authDomain: "vue-todo-91091.firebaseapp.com",
  databaseURL: "https://vue-todo-91091.firebaseio.com",
  projectId: "vue-todo-91091",
  storageBucket: "vue-todo-91091.appspot.com",
  messagingSenderId: "83492813562",
  appId: "1:83492813562:web:e493ec087b7d91ba8fa743",
  measurementId: "G-1FFR31QGG9"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();


firebaseApp.firestore().settings({ timestampsInSnapshots: true})

export default firebaseApp.firestore()