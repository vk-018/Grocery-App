import { NavLink } from "react-router-dom"

const BottomNav = () => {
    //use nav bcoz it works like divs but represents a div which contians nav LInks
  return (

    
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3 md:hidden">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      <NavLink to="/favorites">Fav</NavLink>
      <NavLink to="/account">Account</NavLink>
    </nav>

    //tail widnd : fixed position ,using bottom to define pos relative to screen, 
    //border at top ,vertical padding of 3,hiddne on med or larger screens
  )
}

export default BottomNav
