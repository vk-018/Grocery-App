import ProductCard from "../Components/Product/ProductCard"
import { products } from "../Data/product"
import SearchBar from "../Components/UI/SearchBar"
import { useLocationStore } from "../stores/location.store"

const Home = () => {
  const location = useLocationStore((state) => state.location)

  return (
    <div className="px-6 pt-6 pb-24 max-w-7xl mx-auto">

      {/* Top Logo */}
      <div className="flex justify-center mb-2">
        <img src="/redCarrot.png" alt="logo" className="w-6 h-6" />
      </div>

      {/* Location */}
      <div className="flex justify-center items-center gap-2 text-sm mb-4">
        <span>📍</span>
        <span>
          {location
            ? `${location.zone}, ${location.area}`
            : "Select Location"}
        </span>
      </div>

      {/* Search */}
      <div className="mb-3">
        <SearchBar />
      </div>

      {/* Banner */}
      <div className=" overflow-hidden mb-6">
        <img
          src="/banner.png"
          alt="Banner"
          className="w-full h-28 "
        />
      </div>

      {/* Exclusive Offer */}
      <SectionTitle title="Exclusive Offer" />

      <div className="flex gap-4 overflow-x-auto pb-4 mb-6">
        {products.slice(0, 5).map((product) => (
          <div key={product.id} className="min-w-[160px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Best Selling */}
      <SectionTitle title="Best Selling" />

      <div className="flex gap-4 overflow-x-auto pb-4 mb-6">
        {products.slice(5, 10).map((product) => (
          <div key={product.id} className="min-w-[160px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Groceries Section */}
      <SectionTitle title="Groceries" />

      <div className="flex gap-4 overflow-x-auto pb-6">
        <div className="min-w-[140px] p-4 rounded-2xl border text-center">
          Pulses
        </div>
        <div className="min-w-[140px] p-4 rounded-2xl border text-center">
          Rice
        </div>
      </div>

      {/* General Product Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  )
}

export default Home

// -------------------------------

const SectionTitle = ({
  title
}: {
  title: string
}) => (
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-lg font-semibold">
      {title}
    </h2>
    <button className="text-sm font-medium">
      See all
    </button>
  </div>
)
