import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANSjR51vBteTcd0_loL-HD4bpWNSQGDb4",
  authDomain: "food-ordering-app-16ca2.firebaseapp.com",
  projectId: "food-ordering-app-16ca2",
  storageBucket: "food-ordering-app-16ca2.appspot.com",
  messagingSenderId: "430540472908",
  appId: "1:430540472908:web:7f02f87f8a0a6a31ebeae9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
