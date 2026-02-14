import { useFavouriteStore } from "../../stores/favourite.store"
import { useCartStore } from "../../stores/cart.store"
import { useNavigate } from "react-router-dom"

const Favourite = () => {
  const navigate = useNavigate()

  const favourites = useFavouriteStore(
    (state) => state.favourites
  )

  const addToCart = useCartStore(
    (state) => state.addToCart
  )

  /**
   * Add all favourite items to cart
   */
  const handleAddAllToCart = () => {
    favourites.forEach((product) => {
      addToCart(product, 1)
    })

    navigate("/cart")
  }

  return (
    <div className="min-h-screen bg-white pb-32">

      {/* Header */}
      <div className="text-center py-6 text-xl font-semibold border-b">
        Favourite
      </div>

      {/* Empty State */}
      {favourites.length === 0 ? (
        <div className="flex items-center justify-center mt-32">
          <p className="text-gray-400">
            No favourite items yet
          </p>
        </div>
      ) : (
        <div className="px-6">

          {favourites.map((product) => (
            <div
              key={product.id}
              onClick={() =>
                navigate(`/product/${product.id}`)
              }
              className="flex items-center justify-between py-6 border-b cursor-pointer"
            >

              {/* LEFT SIDE */}
              <div className="flex items-center gap-4">

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-14 h-14 object-contain"
                />

                {/* Product Info */}
                <div>
                  <h3 className="font-medium">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    325ml, Price
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex items-center gap-3">
                <span className="font-semibold">
                  ${product.price}
                </span>
                <span className="text-gray-400">
                  ›
                </span>
              </div>
            </div>
          ))}

        </div>
      )}

      {/* Bottom Add All Button */}
      {favourites.length > 0 && (
        <div className="fixed bottom-20 left-0 right-0 px-6">
          <button
            onClick={handleAddAllToCart}
            className="w-full bg-[#53B175] text-white py-4 rounded-2xl text-lg font-semibold"
          >
            Add All To Cart
          </button>
        </div>
      )}

    </div>
  )
}

export default Favourite
