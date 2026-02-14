import { useAuthStore } from "../../stores/auth.store"
import { useNavigate } from "react-router-dom"

const Account = () => {
  const navigate = useNavigate()

  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)

  const handleLogout = () => {
    logout()
    navigate("/signin")
  }

  return (
    <div className="min-h-screen bg-white pb-20">

      {/* Header */}
      <div className="text-center py-6 text-xl font-semibold border-b">
        Account
      </div>

      {/* User Info */}
      <div className="px-6 py-6 border-b">
        {user ? (
          <>
            <h2 className="text-lg font-semibold">
              {user.name}
            </h2>
            <p className="text-gray-400">
              {user.email}
            </p>
          </>
        ) : (
          <button
            onClick={() => navigate("/signin")}
            className="text-primary font-medium"
          >
            Login / Sign Up
          </button>
        )}
      </div>

      {/* Menu Options */}
      <div className="px-6">

        <div
          onClick={() => navigate("/home")}
          className="flex justify-between items-center py-5 border-b cursor-pointer"
        >
          <span>Orders</span>
          <span>›</span>
        </div>

        <div
          onClick={() => navigate("/home")}
          className="flex justify-between items-center py-5 border-b cursor-pointer"
        >
          <span>Delivery Address</span>
          <span>›</span>
        </div>

        <div className="flex justify-between items-center py-5 border-b">
          <span>Payment Methods</span>
          <span>›</span>
        </div>

        <div className="flex justify-between items-center py-5 border-b">
          <span>Help</span>
          <span>›</span>
        </div>

      </div>

      {/* Logout */}
      {user && (
        <div className="px-6 mt-8">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-3 rounded-xl"
          >
            Logout
          </button>
        </div>
      )}

    </div>
  )
}

export default Account
