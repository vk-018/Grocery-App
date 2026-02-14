import { useNavigate } from "react-router-dom"

const OrderSuccess = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col justify-between items-center px-6 py-10 bg-gradient-to-br from-green-100 via-white to-pink-100">

      {/* Center Content */}
      <div className="flex flex-col items-center mt-20 text-center">

        {/* Success Circle */}
        <div className="w-40 h-40 bg-[#53B175] rounded-full flex items-center justify-center shadow-md mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-semibold text-gray-900 leading-snug mb-4">
          Your Order has been <br />
          accepted
        </h1>

        {/* Description */}
        <p className="text-gray-400 max-w-xs text-base">
          Your items has been placed and is on it's way to being processed
        </p>
      </div>

      {/* Bottom Buttons */}
      <div className="w-full space-y-4 mb-6">

        <button
          onClick={() => navigate("/home")}
          className="w-full bg-[#53B175] text-white py-4 rounded-2xl text-lg font-medium"
        >
          Track Order
        </button>

        <button
          onClick={() => navigate("/home")}
          className="w-full text-lg font-medium text-gray-900"
        >
          Back to home
        </button>

      </div>
    </div>
  )
}

export default OrderSuccess
