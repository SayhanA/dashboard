import { create } from "zustand";
import "react-toastify/dist/ReactToastify.css";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "@/app/firebase/config";
import { toast } from "react-toastify";
import createJWT from "@/app/utils/createJWT";
import { deleteCookie, setCookie } from "cookies-next";

const auth = getAuth(app);
console.log(auth);

const provider = new GoogleAuthProvider();
export const useStore = create((set) => ({
  isLoggedIn: false,

  user: {
    full_name: "Khlid Ahmed",
    handleGoogleSignInWithPopUp: (data) => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setCookie('logged', 'true');
         //   createJWT({email:user?.email});
          //  set({ isLoggedIn: true });
          //  const userEmail = user.email;
          toast("Welcome to Dashboard.");
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(error);
        });
    },

    /* Firebase Login */
    login: ({ username: email, password }) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setCookie('logged', 'true');
          console.log(user);
          //  createJWT({ email });
         //  localStorage.setItem("user", 'true')
          toast("Welcome to our service.");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    },

    /* Firebase SignUp */
    signup: ({ eamil: email, username, password, Confirm_password }) => {
      // console.log({eamil, username, password, Confirm_password})

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setCookie('logged', 'true');
         //  createJWT({ email });
          toast("Welcome to Dashboard.");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    },

    logout: () => {
      const user = auth.currentUser;
      deleteUser(user).then(() => {
         console.log(user)
         deleteCookie('logged');
         // User deleted.
       }).catch((error) => {
         // An error ocurred
         console.log(error)
       });
    }
  },
}));
