import { createContext, useContext, useMemo } from 'react';
import { redirect } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null);


  // call this function when you want to authenticate the user
  const login = async (data) => {
    setUser(data);
    redirect('/questions');
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    redirect('/', { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
