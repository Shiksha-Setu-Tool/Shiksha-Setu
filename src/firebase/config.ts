import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBKOX9xEx9iD53PKivOMWYEQjXk8hZMbfY",
  authDomain: "shiksha-setu-60e62.firebaseapp.com",
  projectId: "shiksha-setu-60e62",
  storageBucket: "shiksha-setu-60e62.firebasestorage.app",
  messagingSenderId: "936466743189",
  appId: "1:936466743189:web:d2d36672d6d9dc65a3009c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
