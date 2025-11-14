import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDamz1GerzLKf6kPXCI_6O-3BPRgbVOwVA",
  authDomain: "crud-39ae5.firebaseapp.com",
  projectId: "crud-39ae5",
  storageBucket: "crud-39ae5.firebasestorage.app",
  messagingSenderId: "841032550339",
  appId: "1:841032550339:web:51a50849736b67b7951f76",
  measurementId: "G-MGVZ141LQZ"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
