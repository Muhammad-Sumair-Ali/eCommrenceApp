import { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../action/firebase'; 

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);
console.log(authData)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setAuthData(user);
      } else {
        setAuthData(null);
      }
    });

    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={[  authData ]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
