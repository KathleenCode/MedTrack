import React from 'react'
import RootLayout from './Pages/RootLayout'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
])


const App = () => {
  return (
    <RouterProvider router={router} />  
  )
}

export default App