// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


// console.log(import.meta.env.VITE_APIKEY);
// console.log(import.meta.env.VITE_AUTHDOMAIN);
// console.log(import.meta.env.VITE_PROJECTID);
// console.log(import.meta.env.VITE_STORAGEBUCKET);
// console.log(import.meta.env.VITE_MESSAGINGSENDERID);
// console.log(import.meta.env.VITE_APPID);
// console.log("object");

export default auth;