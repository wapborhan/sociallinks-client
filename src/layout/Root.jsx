import { Outlet } from "react-router-dom";
import Header from "../pages/home/header/Header";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;
