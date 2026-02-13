import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const brands = ["Individual Collection", "Cocola", "Ifad", "Kazi Farmas"]
const categories = ["Eggs", "Noodles & Pasta", "Chips & Crisps", "Fast Food"]

const FilterPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const applyFilters = () => {
    const query = new URLSearchParams()

    if (selectedBrand) query.set("brand", selectedBrand)
    if (selectedCategory) query.set("subCategory", selectedCategory)

    navigate(`/category/${id}?${query.toString()}`)
  }

  return (
    <div className="min-h-screen bg-[#F7F8FA] flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-6 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="text-2xl font-semibold text-gray-700"
        >
          ✕
        </button>
        <h1 className="text-xl font-semibold text-gray-900">Filters</h1>
        <div className="w-6" />
      </div>

      <div className="flex-1 px-6 space-y-8">

        {/* Categories */}
        <div className="bg-[#EFEFEF] rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-6 text-gray-900">
            Categories
          </h2>

          {categories.map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-2 mb-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedCategory === cat}
                onChange={() =>
                  setSelectedCategory(
                    selectedCategory === cat ? null : cat
                  )
                }
                className="w-6 h-4 accent-green-500"
              />
              <span
                className={`text-base ${
                  selectedCategory === cat
                    ? "text-green-600 font-medium"
                    : "text-gray-800"
                }`}
              >
                {cat}
              </span>
            </label>
          ))}
        </div>

        {/* Brand */}
        <div className="bg-[#EFEFEF] rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-6 text-gray-900">
            Brand
          </h2>

          {brands.map((brand) => (
            <label
              key={brand}
              className="flex items-center gap-2 mb-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedBrand === brand}
                onChange={() =>
                  setSelectedBrand(
                    selectedBrand === brand ? null : brand
                  )
                }
                className="w-6 h-4 accent-green-500"
              />
              <span
                className={`text-base ${
                  selectedBrand === brand
                    ? "text-green-600 font-medium"
                    : "text-gray-800"
                }`}
              >
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      {/* Sticky Apply Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#F7F8FA] px-6 pb-8 pt-4">
        <button
          onClick={applyFilters}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-5 rounded-3xl text-lg font-semibold transition"
        >
          Apply Filter
        </button>
      </div>

    </div>
  )
}

export default FilterPage
