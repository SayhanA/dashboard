import { initializeApp, getApps, getApp } from "firebase/app";
// import {getAuth} from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGEING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_API_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASURMENT_ID
};

const app = initializeApp(firebaseConfig);

export default app;
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
// const auth = getAuth(app);

// const analytics = getAnalytics(app);

// export {app, auth}