import { useParams, useNavigate } from "react-router-dom"
import { products } from "../../Data/product"
import { useCartStore } from "../../stores/cart.store"
import { useFavouriteStore } from "../../stores/favourite.store"
import { useState } from "react"

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const product = products.find((p) => p.id === id)

  const addToCart = useCartStore((state) => state.addToCart)

  const addFavourite = useFavouriteStore(
    (state) => state.addFavourite
  )
  const removeFavourite = useFavouriteStore(
    (state) => state.removeFavourite
  )
  const isFavourite = useFavouriteStore(
    (state) => state.isFavourite(product?.id || "")
  )

  const [quantity, setQuantity] = useState(1)

  if (!product) return <p>Product not found</p>

  const toggleFavourite = () => {
    if (isFavourite) {
      removeFavourite(product.id)
    } else {
      addFavourite(product)
    }
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
    navigate("/cart")
  }

  return (
    <div className="min-h-screen bg-white pb-32">

      {/* Image Section */}
      <div className="relative bg-gray-100 rounded-b-3xl p-6">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 text-xl"
        >
          ←
        </button>

        {/* Share Button */}
        <button className="absolute top-6 right-6 text-xl">
          ⤴
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="mx-auto h-64 object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="px-6 mt-6">

        {/* Title + Favourite */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold">
              {product.name}
            </h1>
            <p className="text-gray-400">
              1kg, Price
            </p>
          </div>

          <button onClick={toggleFavourite} className="text-2xl">
            {isFavourite ? "❤️" : "🤍"}
          </button>
        </div>

        {/* Quantity + Price */}
        <div className="flex justify-between items-center mt-6">

          <div className="flex items-center gap-4">

            <button
              onClick={() =>
                setQuantity((prev) =>
                  prev > 1 ? prev - 1 : 1
                )
              }
              className="w-10 h-10 border rounded-lg"
            >
              -
            </button>

            <span className="text-lg font-medium">
              {quantity}
            </span>

            <button
              onClick={() =>
                setQuantity((prev) => prev + 1)
              }
              className="w-10 h-10 border rounded-lg text-primary"
            >
              +
            </button>
          </div>

          <span className="text-2xl font-semibold">
            ${product.price}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t my-6" />

        {/* Product Detail Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">
              Product Detail
            </h3>
            <span>⌄</span>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            Apples Are Nutritious. Apples May Be Good For Weight Loss.
            Apples May Be Good For Your Heart. As Part Of A
            Healthful And Varied Diet.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t my-6" />

        {/* Nutritions */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-lg">
            Nutritions
          </h3>
          <div className="flex items-center gap-3">
            <span className="bg-gray-100 px-3 py-1 rounded-lg text-sm text-gray-500">
              100gr
            </span>
            <span>›</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t my-6" />

        {/* Review */}
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">
            Review
          </h3>

          <div className="text-orange-500">
            ★★★★★
          </div>
        </div>
      </div>

      {/* Bottom Add To Basket Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-6 shadow-md">
        <button
          onClick={handleAddToCart}
          className="w-full bg-[#53B175] text-white py-4 rounded-2xl text-lg font-semibold"
        >
          Add To Basket
        </button>
      </div>
    </div>
  )
}

export default ProductDetail
