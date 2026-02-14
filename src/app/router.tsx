import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import AuthLayout from "./layout/AuthLayout"


import SplashScreen from "../Pages/auth/SplashScreen"
import Onboarding from "../Pages/auth/Onboarding"
import SignIn from "../Pages/auth/SignIn"
import Signup from "../Pages/auth/SignUp"
import EnterNumber from "../Pages/auth/EnterNumber"
import OTP from "../Pages/auth/Otp"
import Location from "../Pages/auth/Location"


import Home from "../Pages/Home"
import ProductDetail from "../Pages/product/ProductDetail"
import Explore from "../Pages/home/Explore"
import Favourite from "../Pages/favourite/Favourite"

import SubPageLayout from "./layout/SubPageLayout"
import CategoryProducts from "../Pages/category/CategoryProduct"
import FilterPage from "../Pages/category/FilterPage"
import Cart from "../Pages/cart/Cart"
import Checkout from "../Pages/checkout/Checkout"
import OrderSuccess from "../Pages/order/OrderSuccess"
import SearchResults from "../Pages/search/SearchResult"
import Account from "../Pages/account/Account"

//layout then corresponfing pages as nested elements with thier recpective routes
export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/", element: <SplashScreen /> },
      { path: "/onboarding", element: <Onboarding /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <Signup /> },
      {path : "/mobileVerification", element: <EnterNumber/>},
      { path: "/otp", element: <OTP /> },
      { path: "/location", element: <Location /> },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      { path: "/home", element: <Home /> },
      {path: "/explore"  , element: <Explore/>} ,
      { path: "/cart", element: <Cart /> },
      {path: "/search" , element: <SearchResults/>},
      {path: "/favourite" , element: <Favourite/>},
      {path: "/account" , element : <Account/>},
    ],
  },
  {
  element: <SubPageLayout />,
  children: [
    { path: "/category/:id", element: <CategoryProducts /> },
    { path: "/product/:id", element: <ProductDetail/> },
    { path: "/category/:id/filter", element: <FilterPage /> },
    {path : "/checkout" , element: <Checkout/>},
    {path : "/order-success" , element: <OrderSuccess/>},
  ],
},
 

])
