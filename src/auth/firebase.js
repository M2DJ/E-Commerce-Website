import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCOyDehSlxM-aIR2xf_3VSAw2uk8m7h5VM",
  authDomain: "e-commerce-website-35eed.firebaseapp.com",
  projectId: "e-commerce-website-35eed",
  storageBucket: "e-commerce-website-35eed.firebasestorage.app",
  messagingSenderId: "638836059492",
  appId: "1:638836059492:web:0482f6ead9f0849649de71",
  measurementId: "G-LRFC7BYV26"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);