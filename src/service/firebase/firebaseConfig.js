// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD1B3q-jtuQGrfJIlT6-uSMo_Fpm8ut55s",
  authDomain: "proyecto-react-2107f.firebaseapp.com",
  projectId: "proyecto-react-2107f",
  storageBucket: "proyecto-react-2107f.appspot.com",
  messagingSenderId: "92352623357",
  appId: "1:92352623357:web:fd9ad41d778640a9bec494"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);