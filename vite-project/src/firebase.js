import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCD03VkP9FeQyRZ_mPBFH1-AjySxYstiww",
  authDomain: "fatecprovavinicius.firebaseapp.com",
  projectId: "fatecprovavinicius",
  storageBucket: "fatecprovavinicius.firebasestorage.app",
  messagingSenderId: "132735513192",
  appId: "1:132735513192:web:393160dbe353e0d30781dd"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const db = getFirestore(app);
  
// Atributos extras de configuração de e-mail
var actionCodeSettings = {
  url: 'https://fatecprovavinicius.firebaseapp.com'
}