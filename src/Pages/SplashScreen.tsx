const SplashScreen = () => {
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

export default SplashScreen
