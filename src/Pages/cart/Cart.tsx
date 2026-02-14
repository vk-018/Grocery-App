import { useCartStore } from "../../stores/cart.store"
import { useNavigate } from "react-router-dom"

const Cart = () => {
  const navigate = useNavigate()

  const items = useCartStore((state) => state.items)
  const increaseQuantity = useCartStore((state) => state.increaseQuantity)
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity)
  const removeFromCart = useCartStore((state) => state.removeFromCart)

  const totalPrice = items.reduce(
    (total, item) =>
      total + item.product.price * item.quantity,
    0
  )

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">
          Your cart is empty
        </h2>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-32">

      {/* Header */}
      <div className="text-center py-6 text-xl font-semibold">
        My Cart
      </div>

      <div className="px-6 space-y-6">

        {items.map((item) => (
          <div
            key={item.product.id}
            className="flex items-center justify-between border-b pb-6"
          >

            {/* LEFT SECTION */}
            <div className="flex items-center gap-4">

              {/* Image Placeholder */}
              <div className="w-20 h-20 bg-gray-200 rounded-lg" />

              {/* Product Info */}
              <div>
                <h3 className="font-semibold">
                  {item.product.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  1kg, Price
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-4 mt-3">
                  
                  <button
                    onClick={() =>
                      decreaseQuantity(item.product.id)
                    }
                    className="w-10 h-10 rounded-lg border flex items-center justify-center"
                  >
                    -
                  </button>

                  <span className="font-medium">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.product.id)
                    }
                    className="w-10 h-10 rounded-lg border text-primary flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex flex-col items-end justify-between h-full">

              {/* Remove Icon */}
              <button
                onClick={() =>
                  removeFromCart(item.product.id)
                }
                className="text-gray-400"
              >
                ✕
              </button>

              {/* Price */}
              <p className="font-semibold text-lg">
                ${(item.product.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Sticky Checkout Button */}
      <div className="fixed bottom-16 left-0 right-0 bg-white p-6 border-t">

        <div className="fixed bottom-16 left-0 w-full bg-white px-6 pb-6 pt-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-[#53B175] hover:bg-[#429964] 
                    active:scale-[0.98] 
                    transition-all duration-200
                    py-4 rounded-2xl 
                    text-lg font-semibold text-white 
                    flex justify-between items-center px-6"
        >
            <span>Go to Checkout</span>
            <span>${totalPrice.toFixed(2)}</span>
        </button>
        </div>


      </div>
    </div>
  )
}

export default Cart
