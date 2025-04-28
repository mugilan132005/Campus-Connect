// Firebase SDK imports
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Firebase configuration (already provided in your Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyByoFg70I4TS4nuVnjrpDWQF8rFn6jrpNA",
  authDomain: "campus-connect-7c1e2.firebaseapp.com",
  projectId: "campus-connect-7c1e2",
  storageBucket: "campus-connect-7c1e2.firebasestorage.app",
  messagingSenderId: "774857265701",
  appId: "1:774857265701:web:3f314e09c771a419c1e5cc"
};
// Initialize Firebase only once
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // If already initialized
}