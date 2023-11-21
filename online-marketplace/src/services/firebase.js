// src/services/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7exQpGIyn0F9Tr_zmgo5uj8LMdE-7wSA",
  authDomain: "comp229-online-marketplace.firebaseapp.com",
  projectId: "comp229-online-marketplace",
  storageBucket: "comp229-online-marketplace.appspot.com",
  messagingSenderId: "942430859061",
  appId: "1:942430859061:web:b74252c27eb7c290e8667c",
  measurementId: "G-P8LQ4CZ517"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore }; 