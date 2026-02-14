import { useParams } from "react-router-dom"      //used to access the
import { products } from "../../Data/product"
import { useCartStore } from "../../stores/cart.store";

const ProductDetail = () => {
  const { id } = useParams()
  // useParams extracts dynamic value from URL

  // Find product based on id
  const product = products.find((p) => p.id === id)
   //can add an early check with id too
  if (!product) {
    return <div className="p-6">Product not found</div>   
  }

  const addToCart = useCartStore((state) => state.addToCart)

  return (
    <div className="max-w-7xl mx-auto p-6">   {/**max width limit and  auto margin to center horizontally */}
      <div className="grid md:grid-cols-2 gap-10">    {/*only med or larger to grid columns   // img- info kind of */}
        
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

          <div className="fixed bottom-0 left-0 w-full bg-white px-6 pb-6 pt-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-[#53B175] hover:bg-[#429964] 
                        active:scale-[0.98] 
                        transition-all duration-200
                        py-4 rounded-2xl 
                        text-lg font-semibold text-white"
            >
              Add To Cart
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ProductDetail
