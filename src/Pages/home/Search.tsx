import { useState, useMemo } from "react"
import { products } from "../../Data/product"
import ProductCard from "../../Components/Product/ProductCard"

const Search = () => {
  // Controlled input state
  const [query, setQuery] = useState("")

  /**
   * Filter products whenever query changes
   * useMemo prevents recalculating on unrelated renders
   */
  const filteredProducts = useMemo(() => {
    if (!query.trim()) return []

    return products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(query.toLowerCase())
    )
  }, [query])

  return (
    <div className="min-h-screen px-6 pt-6 pb-20">

      {/* Search Bar */}
      <div className="flex items-center gap-3 mb-6">

        <div className="flex-1 bg-gray-100 rounded-2xl px-4 py-3 flex items-center gap-3">

          {/* Search Icon */}
          <span className="text-gray-400">🔍</span>

          <input
            type="text"
            placeholder="Search Store"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent outline-none w-full"
          />

          {/* Clear Button */}
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-gray-400"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filter Icon Placeholder */}
        <button className="text-xl">
          ⚙
        </button>

      </div>

      {/* Empty State */}
      {query && filteredProducts.length === 0 && (
        <p className="text-gray-400 text-center mt-20">
          No products found
        </p>
      )}

      {/* Results Grid */}
      <div className="grid grid-cols-2 gap-5">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  )
}

export default Search
