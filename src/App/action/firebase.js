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
  apiKey: "AIzaSyBup_Xlr5X6DyZEew6KTvEwACjl75dRcls",
  authDomain: "ecomrece2k24.firebaseapp.com",
  projectId: "ecomrece2k24",
  storageBucket: "ecomrece2k24.appspot.com",
  messagingSenderId: "912142878729",
  appId: "1:912142878729:web:cae79cc2ae1f97809350d8"
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


