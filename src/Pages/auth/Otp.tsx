
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

type FormData = {
  code: string
}

const OtpVerification = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
    navigate("/location")
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
        Enter your 4-digit code
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Label */}
        <label className="text-gray-500 text-sm">
          Code
        </label>

        {/* OTP Input */}
        <div className="border-b border-gray-300 focus-within:border-green-500 py-3 mt-2">
          <input
            type="text"
            maxLength={4}
            inputMode="numeric"
            {...register("code", {
              required: "Code is required",
              minLength: {
                value: 4,
                message: "Enter 4-digit code"
              }
            })}
            className="w-full bg-transparent tracking-[0.5em] text-lg focus:outline-none"
            placeholder="- - - -"
          />
        </div>

        {errors.code && (
          <p className="text-red-500 text-sm mt-2">
            {errors.code.message}
          </p>
        )}

        {/* Resend */}
        <button
          type="button"
          className="mt-10 text-green-600 font-medium"
        >
          Resend Code
        </button>

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

export default OtpVerification
