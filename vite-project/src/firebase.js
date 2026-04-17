import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4pfulR67bYJdkVXHKWOnp0ZVsMy3hqqg",
    authDomain: "provapratica-viniciusbovo.firebaseapp.com",
    projectId: "provapratica-viniciusbovo",
    storageBucket: "provapratica-viniciusbovo.firebasestorage.app",
    messagingSenderId: "22293130128",
    appId: "1:22293130128:web:641115221151611c34e115"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const db = getFirestore(app);
  
