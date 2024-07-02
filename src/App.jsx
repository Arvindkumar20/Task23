// import React from 'react'
// import "./app.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Hero from "./components/Hero"

export default function App() {
  const router=createBrowserRouter([
     {
      path:"/login",
      element:<><Navbar/><Login/></>
      },
      {
        path:"/signup",
        element:<><Navbar/><Signup/></>
        },
        {
        path:"/home",
        element:<><Navbar/><Hero img="./hero1.webp" title="Nature"/></>
        },
        {
        path:"/",
        element:<><Navbar/><Hero img="./scating.webp" title="Scating "/></>
        },

  ])
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Login /> */}
      {/* <Navbar/> */}
     <RouterProvider
     router={router}/>
    </div>
  )
}
