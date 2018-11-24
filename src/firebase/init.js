import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase.
var config = {
  apiKey: "AIzaSyAen5ygjV6RpN32mEp4anC24d653MZPWHA",
  authDomain: "vue-firebase-chat-6996c.firebaseapp.com",
  databaseURL: "https://vue-firebase-chat-6996c.firebaseio.com",
  projectId: "vue-firebase-chat-6996c",
  storageBucket: "vue-firebase-chat-6996c.appspot.com",
  messagingSenderId: "1079916072753"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
