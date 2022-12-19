import { Outlet } from 'react-router-dom';
import React from 'react';
import { MainLayout } from './layouts/MainLayout';

function App() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default App;
