import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='lg:w-5/6 mx-auto'>
   <RouterProvider router={router}></RouterProvider>
   </div>
  </React.StrictMode>,
)
