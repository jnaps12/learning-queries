import { BoardQuestions } from '../Pages/BoardQuestions';
import { Login } from '../Pages/Login';
import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '../utils/ErrorPage'
import { Teste } from '../components/Teste';
import { EasyQuestions } from '../Pages/QuestionLevels/EasyQuestions';
import { IntermediaryQuestions } from '../Pages/QuestionLevels/IntermediaryQuestions';
import { HardQuestions } from '../Pages/QuestionLevels/HardQuestions';

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
    ],
  },
  {},
]);


