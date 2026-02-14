import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface SearchBarProps {
  initialValue?: string
}

const SearchBar = ({ initialValue = "" }: SearchBarProps) => {
  const [query, setQuery] = useState(initialValue)
  const navigate = useNavigate()

  /**
   * Navigate to search results page
   */
  const handleSearch = () => {
    if (!query.trim()) return
    navigate(`/search?q=${query}`)
  }

  /**
   * Handle Enter key
   */
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="flex items-center gap-3 mb-2">

      {/* Input Container */}
      <div className="flex-1 bg-gray-100 rounded-2xl px-4 py-3 flex items-center gap-3">

        {/* Search Icon */}
        <span className="text-gray-400 text-lg">
          🔍
        </span>

        <input
          type="text"
          placeholder="Search Store"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent outline-none w-full text-sm"
        />

        {/* Clear Button */}
        {query && (
          <button
            onClick={() => setQuery("")}
            className="text-gray-400"
          >
            ✕
          </button>
        )}
      </div>

    </div>
  )
}

export default SearchBar
