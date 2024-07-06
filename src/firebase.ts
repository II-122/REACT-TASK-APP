// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxInVVpe4utM2f6g4UGH1eNHMLvqz8660",
  authDomain: "react-task-app-2-ddc89.firebaseapp.com",
  projectId: "react-task-app-2-ddc89",
  storageBucket: "react-task-app-2-ddc89.appspot.com",
  messagingSenderId: "625761222549",
  appId: "1:625761222549:web:b24364c7c7ffa7fbd9009c",
  measurementId: "G-ZM1LYQLNEC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);