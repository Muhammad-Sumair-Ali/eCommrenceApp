import { useEffect, useState } from 'react';
import { updateProfile } from "firebase/auth";
import { collection, addDoc, getDocs,getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db, storage,auth} from './firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; 
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
        createdAt: new Date().toLocaleString(), 
        userName: authData.displayName,
        userEmail: authData.email,
        userImage: authData.photoURL,
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
  const deletPost = async (id) => {
    if (confirm("Are you sure you want to delete this post?") === true) {
      toast.promise(
        deleteDoc(doc(db, "posts", id)),
        {
          loading: 'Deleting...',
          success: <b>Post deleted successfully!</b>,
          error: <b>Failed to delete post.</b>,
        }
      );
    } else {
      toast.error('Cancel delete post');
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
    error,
    deletPost
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

export const UpdateProfile = () => {
  const [authData] = useAuth();

  const [displayName, setDisplayName] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);
  const [phonenumber, setPhonenumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const user = auth.currentUser;

  const handleUpdateProfile = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      let photoURL;
      if (photoFile) {
       
        const storageRef = ref(storage, `profilePictures/${user.uid}`);
        await uploadBytes(storageRef, photoFile);
        photoURL = await getDownloadURL(storageRef);
      }
      
      await updateProfile(user, {
        displayName: displayName,
        photoURL: photoURL,
        email: email,
        phoneNumber: phonenumber,
      });
      toast.success("Profile updated successfully");
    } catch (error) {
      setError("Failed to update profile");
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);  
    }
  };

  const handleFileChange = (event) => {
    setPhotoFile(event.target.files[0]);
  };

  return{
    handleUpdateProfile,
    handleFileChange,
    displayName,
    setDisplayName,
    email,
    setEmail,
    phonenumber,
    setPhonenumber,
    loading,
    error,
    
  }
}

export const addCart = (product) => {
    toast.success("Product added to cart");

    let cart = localStorage.getItem("carts");
    cart = cart ? JSON.parse(cart) : [];
    cart.push(product);

    localStorage.setItem("carts", JSON.stringify(cart));
  };

export const useGetDetails = (id) => {

  const [data, setData] = useState(null);

    const fetchProduct = async () => {
      try {
        const productDoc = doc(db, 'posts/', id);
        const productSnap = await getDoc(productDoc);
        if (productSnap.exists()) {
          setData(productSnap.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return{
    fetchProduct,
    data,
    
  }
}
