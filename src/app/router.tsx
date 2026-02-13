import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import AuthLayout from "./layout/AuthLayout"


import SplashScreen from "../Pages/auth/SplashScreen"
import Onboarding from "../Pages/auth/Onboarding"
// import Login from "@/pages/auth/Login"
  import Signup from "../Pages/auth/SignUp"
// import OTP from "@/pages/auth/OTP"
// import Location from "@/pages/auth/Location"

import Home from "../Pages/Home"
import ProductDetail from "../Pages/product/ProductDetail"

//layout then corresponfing pages as nested elements with thier recpective routes
export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/", element: <SplashScreen /> },
      { path: "/onboarding", element: <Onboarding /> },
     // { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    //   { path: "/otp", element: <OTP /> },
    //   { path: "/location", element: <Location /> },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/product/:id", element: <ProductDetail/> }, 
    ],
  },
])
