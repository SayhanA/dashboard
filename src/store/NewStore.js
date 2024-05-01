import { create } from "zustand";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "@/app/firebase/config";

const auth = getAuth(app);
console.log(auth);

const provider = new GoogleAuthProvider();
export const useStore = create((set) => ({
  user: {
    full_name: "Khlid Ahmed",
    handleGoogleSignInWithPopUp: (data) => {
      //   console.log(data);
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    },

    /* Firebase Login */
    login: ({ username:email, password }) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
        });
    },

    /* Firebase SignUp */
    signup: ({ eamil: email, username, password, Confirm_password }) => {
      // console.log({eamil, username, password, Confirm_password})

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    },
  },
}));
