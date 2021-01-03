import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDZUamilxg_wlK0xqsyscA2fWgQIxIWHGQ",
  authDomain: "netflix-clone-7b2e6.firebaseapp.com",
  projectId: "netflix-clone-7b2e6",
  storageBucket: "netflix-clone-7b2e6.appspot.com",
  messagingSenderId: "685847339000",
  appId: "1:685847339000:web:90aece87bd170334eac00d",
  measurementId: "G-5DGJF0QPCM",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
