import { BoardQuestions } from '../Pages/BoardQuestions';
import { Login } from '../Pages/Login';
import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '../utils/ErrorPage'
import { EasyQuestions } from '../Pages/QuestionLevels/EasyQuestions';
import { IntermediaryQuestions } from '../Pages/QuestionLevels/IntermediaryQuestions';
import { HardQuestions } from '../Pages/QuestionLevels/HardQuestions';
import { Question } from '../Pages/Question';
import { QuestionGroupPage } from '../Pages/QuestionGroupPage';
import {SignUp} from '../Pages/SignUp';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
]);


