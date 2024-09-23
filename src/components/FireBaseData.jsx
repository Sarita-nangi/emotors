import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDi2SMWcTVv-BF9yD8VDEeyJIT_QE7t0vA",
  authDomain: "openinapp-be38e.firebaseapp.com",
  projectId: "openinapp-be38e",
  storageBucket: "openinapp-be38e.appspot.com",
  messagingSenderId: "316840896693",
  appId: "1:316840896693:web:9fc9633ed31739241876fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Google sign-in handler
export const handleGoogleSignIn = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      // Successful sign-in
      console.log("User signed in:", result.user);
    })
    .catch((error) => {
      // Handle popup closed error
      if (error.code === "auth/popup-closed-by-user") {
        console.log("User closed the popup without signing in.");
        alert("The popup was closed before completing the sign-in.");
      } else {
        // Handle other errors
        console.error("Error during sign-in:", error.message);
        alert("An error occurred during sign-in. Please try again.");
      }
    });
};
