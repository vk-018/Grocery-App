import { useNavigate } from "react-router-dom"

const Onboarding = () => {
  const navigate = useNavigate()

  return (
    //set position relative bcoz inside this div all will have position absolute  , and make ht wd full
    <div className="relative h-screen w-full">

      {/* Background Image */}
      <img
        src="/onboarding.png"
        alt="Delivery"
        className="absolute inset-0 w-full h-full object-cover"
        
      />
      {/* pos abs, iset 0 means all t,b,l,r- all 0 , crop all extra parts */}

      {/* Dark Overlay   : black color with 40 percent transparancy*/}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content : eleveated, */}
      <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-16 text-white text-center">

        {/* Logo Icon */}
        <div className="flex justify-center mb-4">
          <img src="/logo-white.svg" alt="Logo" className="w-10 h-10" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-semibold leading-snug mb-4">
          Welcome <br /> to our store
        </h1>

        {/* Subtitle */}
        <p className="text-sm opacity-80 mb-8">
          Ger your groceries in as fast as one hour
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/signup")}
          
          className="bg-[#53B175] hover:bg-[#429964] transition-colors py-4 rounded-xl text-lg font-medium"
        >
            {/**transition adds smooth transitions animation ,  */}
          Get Started
        </button>

      </div>
    </div>
  )
}

export default Onboarding
