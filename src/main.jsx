import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import User from './user.jsx'
import Admin from './admin.jsx'
import Owner from './owner.jsx'

const Router = createBrowserRouter([
  {
    path:'/',
    element: <App />
  },
  {
    path:'user',
    element: <User />
  },
  {
    path:'admin',
    element: <Admin />
  },
  {
    path:'owner',
    element: <Owner/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {Router}/>
  </React.StrictMode>,
)
