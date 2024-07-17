import { useEffect, useState } from 'react';
import { collection, addDoc, getDocs,getDoc, doc, updateDoc } from 'firebase/firestore';
import { db, storage } from './firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { doc, updateDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
export const useGetAllPosts = () => {
  const [authData] = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'posts'));
      const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // console.log(posts, "posts");
      setPosts(posts);
      setLoading(false);  
    } catch (error) {
      console.error("Error getting posts:", error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, loading, error, fetchPosts };
};

export const useAddPost = () => {
  const [authData] = useAuth();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const addPost = async () => {
    try {
      let photoURL = '';
      if (photo) {
        const storageRef = ref(storage, `posts/${photo.name}`);
        await uploadBytes(storageRef, photo);
        photoURL = await getDownloadURL(storageRef);
      }

      const newPost = {
        price,
        title,
        description,
        photoURL,
        createdAt: new Date(),
        userName: authData.displayName,
        userEmail: authData.email
      };
      console.log(newPost, "newPost");
      toast.success('Successfully Added Post')
      const docRef = await addDoc(collection(db, 'posts'), newPost);
      return docRef.id;
    } catch (error) {
      console.error("Error adding post:", error);
      setError(error);
    }
  };

  return {
    setPrice,
    price,
    title,
    setTitle,
    description,
    setDescription,
    photo,
    setPhoto,
    addPost,
    handleFileChange,
    error
  };
};



export const useGetProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const productDocRef = doc(db, 'products', productId);
        const productSnap = await getDoc(productDocRef);

        if (productSnap.exists()) {
          setProduct({ id: productSnap.id, ...productSnap.data() });
        } else {
          console.log('No such document!');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setError(error);
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  return { product, loading, error };
};


export const uploadProfileImage = async (file, userId) => {
  try {
    const storageRef = ref(storage, `profiles/${userId}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading profile image:", error);
    throw error;
  }
};

export const updateUserProfile = async (userId, profileData) => {
  try {
    const userDocRef = doc(db, 'users', userId);
    await updateDoc(userDocRef, profileData);
    console.log("User profile updated successfully.");
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
};
