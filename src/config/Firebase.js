import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpTkReTu5tPeWEzbP3sQMQf5luPuWeSY8",
  authDomain: "todo-app-24774.firebaseapp.com",
  projectId: "todo-app-24774",
  storageBucket: "todo-app-24774.appspot.com",
  messagingSenderId: "1015380412576",
  appId: "1:1015380412576:web:c3ecf8e6a9147de0c321c5",
  measurementId: "G-VS12LTWH7J"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
