import { useState } from "react"
import { Link } from "react-router-dom"
import { Eye, EyeOff } from "lucide-react"

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 bg-gradient-to-br from-gray-100 to-gray-200">

      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-semibold mb-2">Sign Up</h1>
      <p className="text-gray-500 mb-8">
        Enter your credentials to continue
      </p>

      {/* Form */}
      <form className="space-y-6">

        {/* Username */}
        <div>
          <label className="text-sm text-gray-500">Username</label>
          <input
            type="text"
            placeholder="Afsar Hossen Shuvo"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-green-500 py-2"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-500">Email</label>
          <div className="flex items-center border-b border-gray-300 focus-within:border-green-500">
            <input
              type="email"
              placeholder="imshuvo97@gmail.com"
              className="w-full py-2 focus:outline-none"
            />
            <span className="text-green-500 text-lg">✓</span>
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="text-sm text-gray-500">Password</label>
          <div className="flex items-center border-b border-gray-300 focus-within:border-green-500">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full py-2 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Terms */}
        <p className="text-sm text-gray-500">
          By continuing you agree to our{" "}
          <span className="text-green-600">Terms of Service</span>{" "}
          and{" "}
          <span className="text-green-600">Privacy Policy</span>.
        </p>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-[#53B175] hover:bg-[#429964] text-white py-4 rounded-xl font-medium transition"
        >
          Sign Up
        </button>
      </form>

      {/* Footer */}
      <p className="text-center mt-6 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-green-600 font-medium">
          Signup
        </Link>
      </p>

    </div>
  )
}

export default SignUp
