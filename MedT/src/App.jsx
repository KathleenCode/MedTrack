import React from 'react'
import RootLayout from './Pages/RootLayout'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Pharmacy from './Pages/Pharmacy/Pharmacy';
import Laboratory from './Pages/Laboratory/Laboratory';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "pharmacy",
        element: <Pharmacy />
      },
      {
        path: "laboratory",
        element: <Laboratory />
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