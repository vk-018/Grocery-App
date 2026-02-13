
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function SplashScreen(){

  const navigate= useNavigate();

  useEffect(() => {

    //redirect after 1.5 s
    const timer = setTimeout(() => {
      navigate("/onboarding")
    }, 3000)

    return () => clearTimeout(timer)    //to avoid memory leak , if component unmounts before 1.5 second
  }, [navigate]);   //Even though it usually doesn’t change, React’s lint rule wants it included.

  return (
    <div className="h-screen bg-green-500 flex items-center justify-center">
      <div className="text-center">
        {/* Logo Icon */}
        <div className="flex justify-center mb-4">
          <img
            src="/logo.svg"
            alt="Nectar Logo"
            className="w-16 h-16"
          />
        </div>

        {/* App Name */}
        <h1 className="text-white text-4xl font-semibold tracking-wide">
          nectar
        </h1>

        {/* Subtitle */}
        <p className="text-white text-sm tracking-[0.3em] mt-2 opacity-80">
          online groceriet
        </p>
      </div>
    </div>
  )
}


