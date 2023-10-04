import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase, ref, get, set, child, update, remove} from "firebase/database";
import { getFirestore } from "firebase/firestore";
 export const environment = {
  production:false,
  firebase:{
    apiKey: "AIzaSyC7QtJbvOVzG7AbRLQUhwzyJxsxcCco14U",
    authDomain: "study-buddy-e8b57.firebaseapp.com",
    projectId: "study-buddy-e8b57",
    storageBucket: "study-buddy-e8b57.appspot.com",
    messagingSenderId: "1087276937613",
    appId: "1:1087276937613:web:8c32e2e3b87ba191494dc4"
  }
  };
  
  // Initialize Firebase
