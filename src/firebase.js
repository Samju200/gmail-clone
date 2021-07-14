import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBs2C2xMxPWGt7FnZJgWzLzi0XtVi3H83w',
  authDomain: 'clone-6faf4.firebaseapp.com',
  projectId: 'clone-6faf4',
  storageBucket: 'clone-6faf4.appspot.com',
  messagingSenderId: '861689663640',
  appId: '1:861689663640:web:b11be4716d34a820e880ed',
  measurementId: 'G-CH752MGX0C',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
