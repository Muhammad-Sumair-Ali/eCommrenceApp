import { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../action/firebase'; 

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);

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
  console.log("authData", authData)
  return (
    <AuthContext.Provider value={[  authData ]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
