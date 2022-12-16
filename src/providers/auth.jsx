import React from 'react';
import { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [token, setToken] = useState(true);


  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};
