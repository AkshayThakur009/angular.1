// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_8gNof65b9KXTWZ9YoYMoHi76B2pyo-o",
  authDomain: "southern-zephyr-276912.firebaseapp.com",
  projectId: "southern-zephyr-276912",
  storageBucket: "southern-zephyr-276912.appspot.com",
  messagingSenderId: "572298932362",
  appId: "1:572298932362:web:54e0382bdedf60761bfd73",
  measurementId: "G-2VSS6NNGHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
