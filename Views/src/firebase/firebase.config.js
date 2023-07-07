// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_e0v0cNE6az2D3lpbq_qX5PBq656z3KI",
  authDomain: "blogproject-1a32f.firebaseapp.com",
  projectId: "blogproject-1a32f",
  storageBucket: "blogproject-1a32f.appspot.com",
  messagingSenderId: "496199307942",
  appId: "1:496199307942:web:5a00e56b79b871d39d1a67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app