// authContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { TOKEN } from '../constants'; 
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null) 

  useEffect(() => {
    const tokenn = localStorage.getItem(TOKEN);
    if (tokenn && typeof tokenn === "string") setToken(tokenn)
  }, [])


  const logout = () => {
    setUser(null);
    setToken(null)
    localStorage.clear() 
  };

  return (
    <AuthContext.Provider value={{ user, token, setToken, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
