import { Header } from './components/Header'
import { Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react'
import { AuthContext } from './providers/auth';

function App() {

  const {token, setToken} = React.useContext(AuthContext);

  if(!token){
    
  }

    return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App
