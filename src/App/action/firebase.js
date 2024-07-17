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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


export async function register(userinfo) {
  try {
    const { email, password, name } = userinfo;
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Set display name using updateProfile method
    await updateProfile(userCredential.user, {
      displayName: name,
    });  

    // Add user data to Firestore
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


export async function addItem(ad) {
  try {
    const { image } = ad; 


    const storageRef = ref(storage, `Todos/${image.name}`);
      await uploadBytes(storageRef, image);
      const imgUrl = await getDownloadURL(storageRef);
      return imgUrl

    alert("Ad Posted Successfully");
  } catch (e) {
    alert(e.message);
  }
}

export async function updateCard(cardImg) {
  try {
    const { image } = cardImg;

    const storageRef = ref(storage, `udateImages/${image.name}`);
    await uploadBytes(storageRef, image);
    const imgUrl = await getDownloadURL(storageRef);
    return imgUrl;
  } catch (e) {
    alert(e.message);
  }
}

export async function getAds() {
  const ads = [];
  const querySnapshot = await getDocs(collection(db, "Todos"));
  querySnapshot.forEach((doc) => {
    const ad = doc.data();
    ad.id = doc.id;
    ads.push(ad);
  });
  return ads;
}

export async function UserData() {
  const UserID = [];
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    const Userd = doc.data();
    Userd.id = doc.id;
    UserID.push(Userd);
  });
  return UserID;
}

export async function UpDateImg(e, image) {
  console.log("e", e);
  // console.log("imagename" ,image)

  const userd = e[0];
  try {
    const storageRef = ref(storage, `Profile image/${image.name}`);
    await uploadBytes(storageRef, image);
    const url = await getDownloadURL(storageRef);
    await addDoc(collection(db, "users"), {
      fullname: userd.fullname,
      email: userd.email,
      age: userd.age,
      img: url,
    });
    const ver = await deleteDoc(doc(db, "users", userd.id));
    console.log("var data", ver);
    alert("Ad Post Successfully");
  } catch (e) {
    alert(e.message);
  }
}
