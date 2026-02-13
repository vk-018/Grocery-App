import ProductCard from "../Components/Product/ProductCard"
import { products } from "../Data/product"

const Home = () => {
  return (
    //padding horixonal and vertical 4 and 6 max width set , margin auto to cneter horizontally
    <div className="px-4 py-6 max-w-7xl mx-auto">
        {/* */}
      <h1 className="text-xl font-bold mb-4">Home</h1>
     {/**grid have cols based on size */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
                key={product.id}
                product={product}
            />
        ))}
      </div>
    </div>
  )
}

export default Home
