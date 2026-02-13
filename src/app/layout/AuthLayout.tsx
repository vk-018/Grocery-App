import { Outlet } from "react-router-dom"

//just setting bg and screen

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Outlet />
    </div>
  )
}

export default AuthLayout
