import { signOut, } from 'firebase/auth';
import { auth } from './firebase';
import toast from 'react-hot-toast';

export const _useAuth = () => {
   



  const signOutUser = async () => {
    try {
      await signOut(auth);
      toast.error('User Loged Out')
      // navigate("/login");
    } catch (error) {
      // toast.error('error Loged Out')
      console.error("Error signing out:", error);
    }
  };



  return {
    
    signOutUser,
  };
};
