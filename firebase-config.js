// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdLJq7F6r6O9XZTQTIpwdrLR0ZySLGQrY",
  authDomain: "shkl-1db60.firebaseapp.com",
  databaseURL: "https://shkl-1db60-default-rtdb.firebaseio.com",
  projectId: "shkl-1db60",
  storageBucket: "shkl-1db60.firebasestorage.app",
  messagingSenderId: "83946018492",
  appId: "1:83946018492:web:3cfa51fa2ddebee27de2b9",
  measurementId: "G-PW83MCMQYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the database instance if you need to use it in other files
// For Realtime Database, you would typically get it like this:
import { getDatabase } from "firebase/database";
export const database = getDatabase(app);
