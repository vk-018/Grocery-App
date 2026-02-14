import { useNavigate } from "react-router-dom"
import { Product } from "../../Types/product"

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const navigate = useNavigate()

  return (
    <div
      role="button"
      onClick={() => navigate(`/product/${product.id}`)}
      className="p-4 rounded-2xl border cursor-pointer flex flex-col justify-between h-64"
    >

      {/* Image Section */}
      <div className="flex justify-center mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-24 object-contain"
        />
      </div>

      {/* Product Info */}
      <div>
        <h3 className="font-semibold text-sm">
          {product.name}
        </h3>

        <p className="text-sm opacity-70 mt-1">
          7pcs, Price
        </p>
      </div>

      {/* Bottom Row */}
      <div className="flex items-center justify-between mt-4">

        <span className="font-bold text-lg">
          ${product.price}
        </span>

        <button
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation() // prevent navigation
            console.log("Add to cart")
          }}
        >
          +
        </button>

      </div>

    </div>
  )
}

export default ProductCard
