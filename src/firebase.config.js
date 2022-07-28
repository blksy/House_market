import {getFirestore} from 'firebase/firestore' 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ_OMjBHlqFDfRzy_7fozNytuH93YJ_vc",
  authDomain: "house-marketplace-app-943e3.firebaseapp.com",
  projectId: "house-marketplace-app-943e3",
  storageBucket: "house-marketplace-app-943e3.appspot.com",
  messagingSenderId: "883132766062",
  appId: "1:883132766062:web:0ed76fbc0f5d7e3574137f",
  measurementId: "G-L9ZDWRN136"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();