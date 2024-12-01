import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Addcoffee from './components/Addcoffee';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import Authprovider from './Providers/Authprovider';
import Users from './components/Users';
import Updatecoffee from './components/Updatecoffee';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/coffee'),
      },
      {
        path: '/addcoffee',
        element: <Addcoffee></Addcoffee>
      },
      {
        path: '/signin',
        element: <Signin></Signin>
      },
      {
        path: '/signup',
        element: <Signup></Signup>,
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path: '/updateCoffee/:id',
        element: <Updatecoffee></Updatecoffee>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Authprovider>
      <RouterProvider router={router} />
     </Authprovider>
  </StrictMode>,
)
