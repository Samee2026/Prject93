import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAT5g8GOwmJGnJho_eZdjVzK0BYvZlc8l4",
  authDomain: "time-management-52025.firebaseapp.com",
  projectId: "time-management-52025",
  storageBucket: "time-management-52025.appspot.com",
  messagingSenderId: "298479915998",
  appId: "1:298479915998:web:010cf591f8cb2a6b31434f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();