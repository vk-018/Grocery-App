import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

type FormData = {
  zone: string
  area: string
}

const Location = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
    navigate("/home")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-6 pt-16">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-xl mb-6"
      >
        ←
      </button>

      {/* Illustration */}
      <div className="flex justify-center mb-8">
        <img
          src="/location.png"
          alt="Location"
          className="w-40"
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-semibold text-center mb-2">
        Select Your Location
      </h1>

      <p className="text-gray-500 text-center mb-10">
        Switch on your location to stay in tune with
        what's happening in your area
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

        {/* Zone */}
        <div>
          <label className="text-gray-500 text-sm">
            Your Zone
          </label>

          <input
            {...register("zone", { required: "Zone is required" })}
            placeholder="Banasree"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-green-500 py-3"
          />

          {errors.zone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.zone.message}
            </p>
          )}
        </div>

        {/* Area */}
        <div>
          <label className="text-gray-500 text-sm">
            Your Area
          </label>

          <input
            {...register("area", { required: "Area is required" })}
            placeholder="Types of your area"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-green-500 py-3"
          />

          {errors.area && (
            <p className="text-red-500 text-sm mt-1">
              {errors.area.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-8 bg-[#53B175] hover:bg-[#429964] text-white py-4 rounded-xl font-medium transition"
        >
          Submit
        </button>

      </form>
    </div>
  )
}

export default Location
