import { useContext } from "react";
import { AuthContex } from "../../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Banner = () => {
  const { createUser, user, logOut } = useContext(AuthContex);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const signInGithub = () => {
    createUser()
      .then((result) => {
        const data = result?.user?.reloadUserInfo;

        axiosPublic
          .post(
            "/users",
            {
              name: data?.displayName,
              email: data?.email,
              username: data?.screenName,
              photoUrl: data?.photoUrl,
              address: "",
              bio: "",
              links: {
                github: data?.screenName,
              },
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            const result = response.data;
            console.log(response);

            if (response.data) {
              toast.success("Successfully Signin!");
              navigate(`/profile/${data?.screenName}`);
            }
            console.log(result);
          })
          .catch((error) => {
            console.error("Something went wrong!", error);

            if (error?.response?.status === 409) {
              toast.success("Successfully Signin!");
              navigate(`/profile/${data?.screenName}`);
            }
          });
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };
  const signOutOnGithub = () => {
    logOut();
    toast.error("Logout");
  };

  return (
    <>
      <div id="home" className="rn-slider-area">
        <div className="slide slider-style-4 bg_image bg_image--1 ">
          <div className="container">
            <div className="row">
              <div className="order-2 order-lg-1 col-lg-9 col-xl-7 mt--35">
                <div className="content">
                  <div className="inner mb_sm--80">
                    <h1 className="title">
                      Hi, I’m
                      <span> {user ? user?.displayName : "Guest"} </span>
                    </h1>
                    <div>
                      <p className="descriptions">
                        Share your social links and professional profiles with
                        each other in an extraordinary way.
                      </p>
                      <p className="descriptions">
                        with a single link you can show all of your social
                        media, professional and coding related profile links.{" "}
                        {"It's"} very easy to share profiles. Just type your
                        profile usernames and boom! 💥
                      </p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-lg-12 col-xl-6 col-md-12 col-sm-12 col-12">
                      <div className="social-share-inner-left">
                        <span className="title"></span>
                      </div>
                      {user?.displayName ? (
                        <a className="rn-btn" onClick={signOutOnGithub}>
                          <span>Log out</span>
                        </a>
                      ) : (
                        <a className="rn-btn" onClick={signInGithub}>
                          <span>Join With Github</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
