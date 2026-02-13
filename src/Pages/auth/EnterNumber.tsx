import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

type FormData = {
  phone: string
}

const EnterNumber = () => {
  const navigate=useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
    navigate("/otp") // or next screen
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-6 pt-16 relative">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 text-xl"
      >
        ←
      </button>

      {/* Title */}
      <h1 className="text-2xl font-semibold mb-10">
        Enter your mobile number
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Label */}
        <label className="text-gray-500 text-sm">
          Mobile Number
        </label>

        {/* Phone Input */}
        <div className="flex items-center border-b border-gray-300 focus-within:border-green-500 py-3 mt-2">
          
          {/* Flag */}
          <img
            src="https://flagcdn.com/w20/bd.png"
            alt="BD"
            className="w-6 h-4 mr-3 rounded-sm"
          />

          {/* Country Code */}
          <span className="mr-3 text-gray-700">+880</span>

          {/* Input */}
          <input
            type="tel"
            maxLength={10}
            placeholder="Enter mobile number"
            {...register("phone", {
              required: "Phone number is required",
              minLength: {
                value: 8,
                message: "Enter valid number"
              },
            })}
            className="w-full bg-transparent focus:outline-none"
          />
        </div>

        {errors.phone && (
          <p className="text-red-500 text-sm mt-2">
            {errors.phone.message}
          </p>
        )}

        {/* Floating Next Button */}
        <button
          type="submit"
          className="absolute bottom-16 right-6 w-16 h-16 bg-[#53B175] hover:bg-[#429964] text-white rounded-full flex items-center justify-center text-2xl shadow-lg transition"
        >
          →
        </button>

      </form>
    </div>
  )
}

export default EnterNumber
