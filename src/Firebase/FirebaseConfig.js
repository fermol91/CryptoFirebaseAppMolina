import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwCpVe_45ApQYnofk2N8ebA-a2QEWKXzY",
  authDomain: "cryptodata-e28d5.firebaseapp.com",
  projectId: "cryptodata-e28d5",
  storageBucket: "cryptodata-e28d5.appspot.com",
  messagingSenderId: "715767584408",
  appId: "1:715767584408:web:32fb875989b398de7662ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);