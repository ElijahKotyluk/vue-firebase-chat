import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase.
var config = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "vue-firebase-chat-6996c.firebaseapp.com",
  databaseURL: "https://vue-firebase-chat-6996c.firebaseio.com",
  projectId: "vue-firebase-chat-6996c",
  storageBucket: "vue-firebase-chat-6996c.appspot.com",
  messagingSenderId: "1079916072753"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
