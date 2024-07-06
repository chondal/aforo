// src/config/firebase.js
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyACY4X3ybNJ9c-1OBFqm3CqZ5aA3uRt-WE",
  authDomain: "aforo-ca3eb.firebaseapp.com",
  projectId: "aforo-ca3eb",
  storageBucket: "aforo-ca3eb.appspot.com",
  messagingSenderId: "695235023785",
  appId: "1:695235023785:web:61f87962e79fb507162ab8"
};

// Inicializa Firebase solo si no hay ninguna aplicación inicializada
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { auth };
