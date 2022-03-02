// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyB-tiQA5QcbXSihO062dZzSHmdbewPz1EU",

  authDomain: "kidz-blocks.firebaseapp.com",

  projectId: "kidz-blocks",

  storageBucket: "kidz-blocks.appspot.com",

  messagingSenderId: "179878257443",

  appId: "1:179878257443:web:394ac58eb641787e09a296",

  measurementId: "G-Z51S1QGDBJ"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
//const firebaseApp = firebase.initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const database = app.firestore();

export default database;