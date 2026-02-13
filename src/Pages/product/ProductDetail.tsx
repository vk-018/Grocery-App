import { useParams } from "react-router-dom"      //used to access the parameters
import { products } from "../../Data/product"

const ProductDetail = () => {
  const { id } = useParams()
  // useParams extracts dynamic value from URL

  // Find product based on id
  const product = products.find((p) => p.id === id)

  if (!product) {
    return <div className="p-6">Product not found</div>
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Product Image */}
        <div className="h-80 bg-gray-100 rounded-xl" />

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-gray-500 mb-4">
            {product.description}
          </p>

          <p className="text-xl font-semibold mb-6">
            ${product.price}
          </p>

          <button className="bg-primary text-white px-6 py-3 rounded-lg">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  )
}

export default ProductDetail
