import { initializeApp } from "firebase/app";
import {
  getAuth,updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import toast from "react-hot-toast";
const firebaseConfig = {
  apiKey: "AIzaSyBCq_WX-qpQVSmvRXwzCpJraJwuuiQNQ1s",
  authDomain: "ecommerce-sumair.firebaseapp.com",
  projectId: "ecommerce-sumair",
  storageBucket: "ecommerce-sumair.appspot.com",
  messagingSenderId: "417523964073",
  appId: "1:417523964073:web:05e4e00a216bbcb56231b8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


export async function register(userinfo) {
  try {
    const { email, password, name } = userinfo;
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(userCredential.user, {
      displayName: name,
    });  

    await addDoc(collection(db, "users"), {
      displayName: name,
      email: email,
    });
    toast.success('Successfully created account')

  } catch (e) {
    toast.error(e.message);
  }
}


export async function login(userinfo) {
  try {
    const {email, password } = userinfo;
    await signInWithEmailAndPassword(auth, email, password);
    toast.success('Successfully Loggedin')
  } catch (e) {
  toast.error(e.message);
}
}


