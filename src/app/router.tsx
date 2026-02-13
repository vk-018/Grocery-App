import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import AuthLayout from "./layout/AuthLayout"

import Splash from "@/pages/auth/Splash"
import Login from "@/pages/auth/Login"
import Home from "@/pages/home/Home"

//layout then corresponfing pages as nested elements with thier recpective routes
export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/", element: <Splash /> },
      { path: "/login", element: <Login /> },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/product/:id", element: <ProductDetail /> }, 
    ],
  },
])
