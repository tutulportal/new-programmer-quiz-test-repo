import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Main from './layouts/Main';
import HomePage from './components/HomePage/HomePage';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: 'home',
          element: <HomePage/>
        },
        {
          path: 'blog',
          element: <Blogs/>
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
