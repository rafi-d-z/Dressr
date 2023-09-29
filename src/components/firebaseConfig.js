// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiGWev3lfggLh1ItaOOeWopeeX18iLW6E",
  authDomain: "dressr-96ae1.firebaseapp.com",
  projectId: "dressr-96ae1",
  storageBucket: "dressr-96ae1.appspot.com",
  messagingSenderId: "261836261265",
  appId: "1:261836261265:web:23af5d79ba84e125ae7c30",
  measurementId: "G-ZJZBGQZTS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
