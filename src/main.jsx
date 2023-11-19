import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import website_roots from './Roots/Main_roots'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={website_roots}></RouterProvider>
  </React.StrictMode>,
)
