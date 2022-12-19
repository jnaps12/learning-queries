import { Outlet } from 'react-router-dom';
import React from 'react';
import { Main } from './layouts/Main';

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

  return (
    <>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default App;
