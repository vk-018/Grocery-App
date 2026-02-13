import { useNavigate } from "react-router-dom"
import { CategoryCard as CategoryType } from "../../Types/categoryCard"

interface Props {
  category: CategoryType
}

const CategoryCard = ({ category }: Props) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/category/${category.id}`)}
      className={`
        cursor-pointer
        p-6 rounded-2xl border
        ${category.bgColor}
        ${category.borderColor}
        flex flex-col items-center text-center
        transition hover:scale-[1.02]
      `}
    >
      {/* Placeholder image box */}
      <div className="h-20 sm:h-36 w-full bg-white rounded-lg mb-4" />

      <h3 className="font-semibold text-sm">
        {category.title}
      </h3>
    </div>
  )
}

export default CategoryCard
