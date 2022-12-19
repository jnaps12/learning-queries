import { Outlet } from 'react-router-dom';
import React from 'react';
import { Main } from './layouts/Main';

function App() {

  return (
    <>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default App;
