import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHr_g6SlKfPRcYbrbYuXsT-Izdgku0ahQ",
  authDomain: "newloyiha.firebaseapp.com",
  projectId: "newloyiha",
  storageBucket: "newloyiha.firebasestorage.app",
  messagingSenderId: "404775119715",
  appId: "1:404775119715:web:c40f45fb6b4c88e5678156"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
