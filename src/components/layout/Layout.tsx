import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
