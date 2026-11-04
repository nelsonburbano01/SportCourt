import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDcanc70kP5jVpxp-j0FZ23m-tW9aDEDNY",
  authDomain: "sporcourt.firebaseapp.com",
  projectId: "sporcourt",
  storageBucket: "sporcourt.firebasestorage.app",
  messagingSenderId: "790213104776",
  appId: "1:790213104776:web:d86110f969303f45ef3b3d",
  measurementId: "G-YEMEMQBN7V"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
