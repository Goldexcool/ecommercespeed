import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
// import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVXx0WCpC_hIG7jxQb2-E-rSCHnjY-KF8",
  authDomain: "ecommercespeed-522a6.firebaseapp.com",
  projectId: "ecommercespeed-522a6",
  storageBucket: "ecommercespeed-522a6.appspot.com",
  messagingSenderId: "582587930882",
  appId: "1:582587930882:web:596527ce56221bf37b0a1b",
  measurementId: "G-RCYKSWEHHG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const storage = getStorage(app);
export default function initFirebase() {
  if (!firebase.apps.length) {
    app;
    if (typeof window !== "undefined") {
      if ("measurementId" in firebaseConfig) {
        getAnalytics(app);
        getPerformance(app);
      }
    }
    console.log("Firebase was successfully initilized");
  }
}
