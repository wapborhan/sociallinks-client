import { Outlet, useLocation } from "react-router-dom";
import Header from "../pages/home/header/Header";
import Footer from "../pages/home/footer/Footer";

const Root = () => {
  const location = useLocation();
  const showFooter = location.pathname !== "/";
  return (
    <>
      <Header />
      <Outlet />
      {showFooter && <Footer />}
    </>
  );
};

export default Root;
