// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbiOZSGFeTtdrByhH0mbi1r-O-0OWFvnw",
  authDomain: "burger-85329.firebaseapp.com",
  databaseURL:
    "https://burger-85329-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "burger-85329",
  storageBucket: "burger-85329.appspot.com",
  messagingSenderId: "970866975626",
  appId: "1:970866975626:web:cca6ac0a14ae22f60ede73",
  measurementId: "G-J6T25MHZX9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
