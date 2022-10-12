import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Main from './layouts/Main';
import HomePage from './components/HomePage/HomePage';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';
import QuizDetail from './components/QuizDetail/QuizDetail';
import Statistics from './components/Statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <HomePage/>
        },
        {
          path: 'home',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <HomePage/>
        },
        {
          path: 'blog',
          element: <Blogs/>
        },
        {
          path: 'quiz/:quizId',
          loader: async ({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
          },
          element: <QuizDetail/>
        },
        {
          path: 'statistics',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics/>
        }
      ]
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
