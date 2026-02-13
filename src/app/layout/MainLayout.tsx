import { Outlet } from "react-router-dom"
import BottomNav from "@/components/navigation/BottomNav"

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">   {/**lg back ground  */}
      <main className="flex-1 pb-20">                  {/**flex 1 takes all remaining place and pb of 20 */}
        <Outlet />                   {/**this is where child components will be rendered */}
      </main>

      <BottomNav />          {/**bottom nav stays visible */}
    </div>
  )
}
//main is a kind of div with better readablity //it represent the body of a webpage
export default MainLayout
