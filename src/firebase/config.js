import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLY-dlb50lTIeqQMCCLOn1wwOdEnGNjdc",
    authDomain: "udemy-book-app.firebaseapp.com",
    projectId: "udemy-book-app",
    storageBucket: "udemy-book-app.appspot.com",
    messagingSenderId: "503444458947",
    appId: "1:503444458947:web:af90fa78678b776e674176"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };