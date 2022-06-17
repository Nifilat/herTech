// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRpiLLm9mO3OIGXLOi_NjmUfvX7KtQZB0",
  authDomain: "hertechtrail-bd69a.firebaseapp.com",
  projectId: "hertechtrail-bd69a",
  storageBucket: "hertechtrail-bd69a.appspot.com",
  messagingSenderId: "228480460511",
  appId: "1:228480460511:web:d838ce764345c11a8beb6a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
