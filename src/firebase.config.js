// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPmm44kmYhRJ3wSrPfbU-qikMoaH6BZzc",
  authDomain: "coffee-store-da612.firebaseapp.com",
  projectId: "coffee-store-da612",
  storageBucket: "coffee-store-da612.firebasestorage.app",
  messagingSenderId: "605232215692",
  appId: "1:605232215692:web:18fe6f1d38775dfe1deda9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);