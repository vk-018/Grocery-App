import { Outlet } from "react-router-dom"

const SubPageLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Outlet />
    </div>
  )
}

export default SubPageLayout
