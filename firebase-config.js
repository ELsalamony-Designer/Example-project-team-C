// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; // Import for Realtime Database
import { getStorage } from "firebase/storage"; // Import for Firebase Storage

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpT-XyPKNPKGetKYl_qDPKsdqL_u2SCyk",
  authDomain: "atr-egclothes-2faeb.firebaseapp.com",
  databaseURL: "https://atr-egclothes-2faeb-default-rtdb.firebaseio.com",
  projectId: "atr-egclothes-2faeb",
  storageBucket: "atr-egclothes-2faeb.firebasestorage.app",
  messagingSenderId: "455708726120",
  appId: "1:455708726120:web:a35a5ffbbb8c5e8b0dfcdd",
  measurementId: "G-99J4WYBTM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the database and storage instances for use in other files
export const database = getDatabase(app);
export const storage = getStorage(app); // Export the storage instance
