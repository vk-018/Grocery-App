import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"


type FormData = {
  username: string
  email: string
  password: string
}
//useForm hooke
const SignUp = () => {

  const navigate= useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();



  const onSubmit = (data: FormData) => {
    console.log(data)
    navigate("/signin");
  }

  return (
    //bg gradient with direction bottom right
    //form start color to end color
    <div className="min-h-screen flex flex-col justify-center px-6 bg-gradient-to-br from-gray-100 to-gray-200">

      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img src="/redCarrot.png" alt="Logo" className="w-10 h-10" />
      </div>

      <h1 className="text-2xl font-semibold mb-2">Sign Up</h1>
      <p className="text-gray-500 mb-8">
        Enter your credentials to continue
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Username */}
        <div>
          <label className="text-sm text-gray-500">Username</label>
          <input
            {...register("username", { required: "Username is required" })}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-green-500 py-2"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-500">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email"
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

      <p className="text-center mt-6 text-sm">
        Already have an account?{" "}
        <Link to="/signin" className="text-green-600 font-medium">
          Signin
        </Link>
      </p>

    </div>
  )
}

export default SignUp
