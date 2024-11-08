// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm0GEte33JmpDPeT2FxWKFtyxp4moLzDg",
  authDomain: "fir-react-e36c3.firebaseapp.com",
  projectId: "fir-react-e36c3",
  storageBucket: "fir-react-e36c3.firebasestorage.app",
  messagingSenderId: "59445337747",
  appId: "1:59445337747:web:1b9eb7a0ed5a29fa8db766",
  databaseURL:"https://fir-react-e36c3-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
