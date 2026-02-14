import { useSearchParams } from "react-router-dom"
import { products } from "../../Data/product"
import ProductCard from "../../Components/Product/ProductCard"
import SearchBar from "../../Components/UI/SearchBar"


const SearchResults = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q") || ""
  

  /**
   * Filter products based on query
   */
  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(query.toLowerCase())
  )

  return (
    <div className="min-h-screen px-6 pt-6 pb-20">

      {/* SearchBar with pre-filled query */}
      <SearchBar initialValue={query} />

      {/* Results */}
      <div className="mt-6 grid grid-cols-2 gap-5">

        {filteredProducts.length === 0 ? (
          <p className="col-span-2 text-center text-gray-400 mt-20">
            No products found
          </p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        )}

      </div>

    </div>
  )
}

export default SearchResults
