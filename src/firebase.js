// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ0_jVRutet82yRqoEAEGDmNcN47KufVo",
  authDomain: "twitter-clone-61075.firebaseapp.com",
  projectId: "twitter-clone-61075",
  storageBucket: "twitter-clone-61075.appspot.com",
  messagingSenderId: "1046635934940",
  appId: "1:1046635934940:web:4692181404e455c33cb019",
  measurementId: "G-SCQR4Y2RWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {app, db, analytics};