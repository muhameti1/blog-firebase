import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoxNS8N5D_gl2H_eWWvhP2RPlKQkNmmc0",
  authDomain: "blog-50443.firebaseapp.com",
  projectId: "blog-50443",
  storageBucket: "blog-50443.appspot.com",
  messagingSenderId: "990011434126",
  appId: "1:990011434126:web:fc98589f3da493db9255df",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
