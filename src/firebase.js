// firebase.js

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { loadStripe } from "@stripe/stripe-js";
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB-OuZNK8KQyKPEMYFb_9XjR7wJStPvQfk",
  authDomain: "hydrant-stripe.firebaseapp.com",
  projectId: "hydrant-stripe",
  storageBucket: "hydrant-stripe.appspot.com",
  messagingSenderId: "128074610329",
  appId: "1:128074610329:web:09d76ffbb8d55b1f36aa08",
  measurementId: "G-W2TYGGFD9E",
};

firebase.initializeApp(firebaseConfig);

// Export the Firebase app instance
export const app = firebase;

// Now, you can set up Stripe using your Firebase project's API key

export const stripePromise = loadStripe(
  "pk_test_51O0skUFPnYhR6Lx465QyF1oDzTbwW0DtcuRn52fFn84YWLdsJWC81ANZx67qiob6BkhzKyE6mG8yDO7OOoNFPvZ200xmCcy2p0"
);
