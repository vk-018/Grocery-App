import { useCartStore } from "../../stores/cart.store"
import { useNavigate } from "react-router-dom"

const Checkout = () => {
  const navigate = useNavigate()
  const items = useCartStore((state) => state.items)
  const clearCart = useCartStore((state) => state.clearCart)

  const totalPrice = items.reduce(
    (total, item) =>
      total + item.product.price * item.quantity,
    0
  )

  const placeOrder = () => {
    clearCart()
    navigate("/order-success")
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40"
        onClick={() => navigate(-1)}
      />

      {/* Bottom Sheet */}
      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 pb-10 z-50">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">
            Checkout
          </h1>

          <button
            onClick={() => navigate(-1)}
            className="text-xl"
          >
            ✕
          </button>
        </div>

        {/* Rows */}
        <div className="space-y-5">

          {/* Delivery */}
          <div className="flex justify-between items-center border-b pb-4">
            <span className="text-gray-400">
              Delivery
            </span>
            <div className="flex items-center gap-2">
              <span className="font-medium">
                Select Method
              </span>
              <span>›</span>
            </div>
          </div>

          {/* Payment */}
          <div className="flex justify-between items-center border-b pb-4">
            <span className="text-gray-400">
              Payment
            </span>
            <div className="flex items-center gap-2">
              <div className="w-8 h-5 bg-blue-500 rounded-sm" />
              <span>›</span>
            </div>
          </div>

          {/* Promo */}
          <div className="flex justify-between items-center border-b pb-4">
            <span className="text-gray-400">
              Promo Code
            </span>
            <div className="flex items-center gap-2">
              <span className="font-medium">
                Pick discount
              </span>
              <span>›</span>
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center border-b pb-4">
            <span className="text-gray-400">
              Total Cost
            </span>
            <div className="flex items-center gap-2">
              <span className="font-semibold">
                ${totalPrice.toFixed(2)}
              </span>
              <span>›</span>
            </div>
          </div>

          {/* Terms */}
          <p className="text-sm text-gray-400 mt-4">
            By placing an order you agree to our
            <span className="font-medium text-black">
              {" "}Terms And Conditions
            </span>
          </p>

        </div>

        {/* Place Order */}
        <button
          onClick={placeOrder}
          className="w-full bg-[#53B175] text-white py-4 rounded-2xl text-lg font-medium mt-8"
        >
          Place Order
        </button>

      </div>
    </>
  )
}

export default Checkout
