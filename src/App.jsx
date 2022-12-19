import { Header } from './components/Header';
import { Outlet, Routes, Route, useRoutes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';
import { AuthContext } from './providers/auth';
import { Login } from './Pages/Login';
import { Home } from './Pages/Home';
import { BoardQuestions } from './Pages/BoardQuestions';
import { ErrorPage } from './utils/ErrorPage';
import { EasyQuestions } from './Pages/QuestionLevels/EasyQuestions';
import { IntermediaryQuestions } from './Pages/QuestionLevels/IntermediaryQuestions';
import { HardQuestions } from './Pages/QuestionLevels/HardQuestions';
import { Question } from './Pages/Question';
import { QuestionGroupPage } from './Pages/QuestionGroupPage';
import { SignUp } from './Pages/SignUp';
import { Main } from './Layout/Main';

const privateRoutes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/questions',
        element: <BoardQuestions />,
        children: [
          {
            path: '/questions/easy',
            element: <EasyQuestions />,
          },
          {
            path: '/questions/intermediary',
            element: <IntermediaryQuestions />,
          },
          {
            path: '/questions/hard',
            element: <HardQuestions />,
          },
        ],
      },
      {
        path: '/questions/:difficulty/:groupid',
        element: <QuestionGroupPage />,
        children: [
          {
            path: '/questions/:difficulty/:groupid/question/:questionid',
            element: <Question />,
          },
        ],
      },
    ],
  },
];

const publicRoutes = [
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
];

export function App() {
  const { token, setToken } = React.useContext(AuthContext);

  const routes = useRoutes(token ? privateRoutes : publicRoutes);

  return (
    <>
      <Main>
        {routes}
      </Main>
    </>
  );
}

export default App;
