import { NavLink } from "react-router-dom"
import {
  Store,
  Search,
  ShoppingCart,
  Heart,
  User
} from "lucide-react"

import { useCartStore } from "../../stores/cart.store"

const BottomNav = () => {

  // Select only items from store
    const items = useCartStore((state) => state.items)

    // Calculate total item count
    const cartCount = items.reduce(
      (total, item) => total + item.quantity,
      0
    );

  //tailwind: items center is vertically centering the div ,turning active to green and incative to gray
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex flex-col items-center text-xs ${
      isActive ? "text-[#53B175]" : "text-gray-500"
    }`

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-sm">
      <div className="flex justify-around py-3">

        <NavLink to="/home" className={linkClass}>
          <Store size={22} />
          <span className="mt-1">Shop</span>
        </NavLink>

        <NavLink to="/explore" className={linkClass}>
          <Search size={22} />
          <span className="mt-1">Explore</span>
        </NavLink>
         
        <div className="relative">
        <NavLink to="/cart" className={linkClass}>
          <ShoppingCart size={22} />
          <span className="mt-1">Cart</span>
        </NavLink>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </div>

        

        <NavLink to="/favourite" className={linkClass}>
          <Heart size={22} />
          <span className="mt-1">Favourite</span>
        </NavLink>

        <NavLink to="/account" className={linkClass}>
          <User size={22} />
          <span className="mt-1">Account</span>
        </NavLink>

      </div>
    </nav>
  )
}

export default BottomNav
