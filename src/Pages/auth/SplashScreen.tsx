import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function SplashScreen() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding")
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="min-h-screen bg-[#53B175] flex flex-col justify-center items-center relative">

      {/* Center Content */}
      <div className="flex flex-col items-center -mt-10">

        {/* Logo */}
        <img
          src="/carrot.png"
          alt="Nectar Logo"
          className="w-20 h-20 mb-5"
        />

        {/* App Name */}
        <h1 className="text-white text-5xl font-light tracking-wide">
          nectar
        </h1>

        {/* Subtitle */}
        <p className="text-white text-xs tracking-[0.35em] mt-3 opacity-90 uppercase">
          online groceries
        </p>

      </div>

    </div>
  )
}



