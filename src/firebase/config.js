import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCytpXDGa9TQU10yAz72VlLgNHC1JqTe6E",
  authDomain: "miniblog-b88f7.firebaseapp.com",
  projectId: "miniblog-b88f7",
  storageBucket: "miniblog-b88f7.appspot.com",
  messagingSenderId: "185251547838",
  appId: "1:185251547838:web:a46ccca8635677bd332cef"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}