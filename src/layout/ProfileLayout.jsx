import { Outlet } from "react-router-dom";
import ProfileHeader from "../pages/home/header/ProfileHeader";
import Footer from "../pages/home/footer/Footer";

const ProfileLayout = () => {
  return (
    <>
      <ProfileHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default ProfileLayout;
