import Header from "./Header";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
export default function Layout() {
  return (
    <div>
    <div className="py-4 flex flex-col min-h-screen max-w-6xl mx-auto">
      <Header />
      <Outlet />
    </div>
    <Footer/>
    </div>
  );
}
