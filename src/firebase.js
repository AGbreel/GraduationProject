import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfFRMMNO7KdNoFgDJFsiaMQx8broCLBTM",
  authDomain: "graduation-project-333fd.firebaseapp.com",
  projectId: "graduation-project-333fd",
  storageBucket: "graduation-project-333fd.firebasestorage.app",
  messagingSenderId: "421008173687",
  appId: "1:421008173687:web:2f4741885ca58d4981b472"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };