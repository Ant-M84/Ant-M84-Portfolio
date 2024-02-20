import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Error from './pages/Error'
import Home from './pages/Home';
import Portfolio from './components/Project/Portfolio';
import Resume from './components/Project/Resume'
import Contact from './pages/Contact';

const router = createBrowserRouter([
  { path: '/',
    element: <App />,   
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        path: '/',
        
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
