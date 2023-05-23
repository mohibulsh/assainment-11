import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../Home/Home';
import Main from '../Layout/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main/>,
    children:[
       {
        path:'/',
        element:<Home/>,
       }
    ]
  },
]);

export default router;