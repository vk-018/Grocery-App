import { useParams, useNavigate } from "react-router-dom"
import { products } from "../../Data/product"
import ProductCard from "../../Components/Product/ProductCard"
import { useSearchParams } from "react-router-dom"


const CategoryProducts = () => {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const brand = searchParams.get("brand")

  const navigate = useNavigate()

  // Filter products by category id  and brand
  const filteredProducts = products.filter((product) => {
  const matchesCategory = product.category === id
  const matchesBrand = brand ? product.brand === brand : true

  return matchesCategory && matchesBrand
})


  return (
    <div className="max-w-7xl mx-auto p-6">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6">
        
        {/* Back Button */}
        <button onClick={() => navigate(-1)}>
          ←
        </button>

        {/* Category Title */}
        <h1 className="text-xl font-semibold">
          {id}
        </h1>

        {/* Filter Icon Placeholder */}
        <button onClick={() => navigate(`/category/${id}/filter`)}>
          ⚙Filter
        </button>

      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 text-gray-500">
            <p className="text-lg font-medium">
            No products available
            </p>
            <p className="text-sm mt-2">
            Please check back later.
            </p>
        </div>
        ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
        </div>
       )}

    </div>
  )
}

export default CategoryProducts
