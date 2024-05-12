import { Outlet } from "react-router-dom";
import ProfileHeader from "../pages/home/header/ProfileHeader";

const ProfileLayout = () => {
  return (
    <>
      <ProfileHeader />
      <Outlet />
    </>
  );
};

export default ProfileLayout;
