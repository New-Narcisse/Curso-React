// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC79ISvDd1XeF5d_PwNBuHPZ-XormrPuWE",
  authDomain: "curso-react-b176a.firebaseapp.com",
  projectId: "curso-react-b176a",
  storageBucket: "curso-react-b176a.appspot.com",
  messagingSenderId: "540857813695",
  appId: "1:540857813695:web:282078d83ac526d8c2d40a"
  
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore(FirebaseApp);

