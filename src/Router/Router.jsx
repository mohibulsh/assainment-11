import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../Home/Home';
import Main from '../Layout/Main';
import Login from '../SharePage/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main/>,
    children:[
       {
        path:'/',
        element:<Home/>,
       },
       {
        path:'/login',
        element:<Login/>
       }
    ]
  },
]);

export default router;