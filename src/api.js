// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKHPhP6DRV4-FvTpPaH1sS4UuSoPiDX14",
  authDomain: "vanlife-72e4f.firebaseapp.com",
  projectId: "vanlife-72e4f",
  storageBucket: "vanlife-72e4f.appspot.com",
  messagingSenderId: "874799666618",
  appId: "1:874799666618:web:ddfdff3eed8ef9697c7983",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Initialize firebase authentication
const auth = getAuth(app);

const vansCollectionRef = collection(db, "vans");

export const getVans = async () => {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return dataArr;
};
// npm install express dotenv mongoose bcryptjs jsonwebtoken morgan isemail nodemon express-async-errors  
// cookie-parser

export const getVan = async (id) => {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
  return { ...vanSnapshot.data(), id: vanSnapshot.id };
};

export const getHostVans = async (hostId) => {
  const hostQuery = query(
    vansCollectionRef,
    where("hostId", "==", "4H2lWExDdvyNSrqTt0Og")
  );
  const hostVans = await getDocs(hostQuery);
  const dataArr = hostVans._docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataArr;
};

export const getHostVan = async (id) => {
  const hostQuery = query(
    vansCollectionRef,
    where("hostId", "==", "4H2lWExDdvyNSrqTt0Og")
  );
  const hostVans = await getDocs(hostQuery);
  const dataArr = hostVans._docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataArr.find((doc) => doc.id === id);
};

export const signupUser = async ({ email, password }) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const user = res.user;
  return user;
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export async function loginUser({ email, password }) {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res.user;
}



onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      return user.email;
    }
  });


export const authState = async() => {
  return auth.currentUser
}