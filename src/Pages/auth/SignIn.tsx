import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

type FormData = {
  email: string
  password: string
}

const Login = () => {
 
  const navigate= useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
    navigate("/mobileVerification")

  }

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 bg-gradient-to-br from-gray-100 to-gray-200">

      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-semibold mb-2">Login</h1>
      <p className="text-gray-500 mb-8">
        Enter your email and password
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Email */}
        <div>
          <label className="text-sm text-gray-500">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter valid email"
              }
            })}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-green-500 py-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="text-sm text-gray-500">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters"
              }
            })}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-green-500 py-2"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Forgot Password */}
        <div className="text-right">
          <Link to="/forgot-password" className="text-sm text-gray-600">
            Forgot Password?
          </Link>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-[#53B175] hover:bg-[#429964] text-white py-4 rounded-xl font-medium transition"
        >
          Log In
        </button>

      </form>

      {/* Footer */}
      <p className="text-center mt-6 text-sm">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-green-600 font-medium">
          Singup
        </Link>
      </p>

    </div>
  )
}

export default Login
