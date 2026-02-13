import { useNavigate } from "react-router-dom"       //helps in navigating 
import { Product } from "../../Types/product"


//define typr of parameter which will be recied as prop
interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {     //destructing product from the prop obeject
  const navigate = useNavigate()
 {/**making product card clickable  using navigate */}
  return (
    <div  role="button" 
    
      onClick={() => navigate(`/product/${product.id}`)}             
      className="bg-white p-4 rounded-xl shadow-sm cursor-pointer"
    >
        {/* this is the image holder */}
      <div className="h-32 bg-gray-100 rounded-md mb-4" /> 

      <h3 className="font-medium">{product.name}</h3>

      <p className="text-gray-500">${product.price}</p>
    </div>
  )
  {/*tailwind : *rounded corners , small shadowand cursor pointer */}
}

export default ProductCard
