import toast from "react-hot-toast";
import Loading from "../../../components/Loading";
import UserBanner from "./UserBanner";
import DefaultBanner from "./DefaultBanner";
import useMetaData from "../../../hooks/useMetaData";
import useAuth from "../../../hooks/useAuth";

const Banner = () => {
  useMetaData("Home");
  const { user, logOut, loading } = useAuth();

  const signOutOnGithub = () => {
    logOut();
    toast.error("Logout");
  };

  return (
    <>
      <div className="banner vw-100 md-h-100 xl-vh-100 d-flex justify-content-center align-items-center">
        <div id="home" className="rn-slider-area">
          <div className="slide slider-style-4 bg_image bg_image--1 ">
            {loading ? (
              <Loading />
            ) : (
              <>
                {user ? (
                  <UserBanner signOutOnGithub={signOutOnGithub} user={user} />
                ) : (
                  <DefaultBanner />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
