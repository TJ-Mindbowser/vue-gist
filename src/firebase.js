// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// import firebase from 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTHIvUwb8m_RofFHO7RbVXAUS0m4-loPU",
  authDomain: "crud-b1f3d.firebaseapp.com",
  projectId: "crud-b1f3d",
  storageBucket: "crud-b1f3d.appspot.com",
  messagingSenderId: "659452967237",
  appId: "1:659452967237:web:6288d6bdf3be5967b5e62c",
  measurementId: "G-GHD6HQXZKX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
// Initialize Firebase