// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1v8OSZAMqZUqbDN_4UacgO3BIuOc5dfc",
  authDomain: "blogingsite25.firebaseapp.com",
  projectId: "blogingsite25",
  storageBucket: "blogingsite25.appspot.com",
  messagingSenderId: "1037188074778",
  appId: "1:1037188074778:web:a4626f298903e64fa6b0a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app