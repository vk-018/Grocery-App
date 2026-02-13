import { categories } from "../../Data/categories"
import CategoryCard from "../../Components/UI/CategoryCard"

const Explore = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-center mb-6">
        Find Products
      </h1>

      {/* Search Bar UI (inactive for now) */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search Store"
          className="w-full bg-gray-100 rounded-xl p-4 outline-none"
        />
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
          />
        ))}
      </div>
    </div>
  )
}

export default Explore
