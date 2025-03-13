import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-140px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout