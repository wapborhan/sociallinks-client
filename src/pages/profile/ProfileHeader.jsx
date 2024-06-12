import { useEffect } from "react";
import { FaMapMarkerAlt, FaHeart, FaRegHeart, FaEye } from "react-icons/fa";
import { Link, NavLink, useParams } from "react-router-dom";
import useGitProfileData from "../../hooks/useGitProfileData";
import useSingleUser from "../../hooks/useSingleUser";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const ProfileHeader = () => {
  const { usernames } = useParams();
  const [gitProfileData] = useGitProfileData(usernames);
  const [singleUser, refetch] = useSingleUser(usernames);
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const toggleHeart = () => {
    if (user) {
      axiosPublic
        .post(`/liked/${usernames}`, {
          liker: user?.reloadUserInfo?.screenName,
        })
        .then((response) => {
          refetch();
          if (response?.status === 200) {
            toast.success("Liked");
          }
        })
        .catch((error) => {
          refetch();
          if (error?.response?.status === 409) {
            toast.success("You already Liked.");
          }
        });
    }
  };

  useEffect(() => {
    if (user) {
      const recordView = async () => {
        try {
          await axiosPublic.post(`/views/${usernames}`, {
            viewer: user?.reloadUserInfo?.screenName,
          });
        } catch (error) {
          console.error("Error recording view:", error);
        }
      };
      recordView();
    }
  }, [user, axiosPublic, usernames, refetch]);

  const existingLiker = singleUser?.profileLikes?.find(
    (liker) => liker === user?.reloadUserInfo?.screenName
  );

  return (
    <>
      {/* {user ? ( */}
      <div className="main-page-wrapper">
        <div className="rn-header-image-area">
          <div
            className="bg_image--9 bg_image h-100"
            style={{
              backgroundImage: `url("/assets/images/bg-image-9.jpg")`,
            }}
          ></div>
        </div>
        <div className="rn-content-wrapper">
          <div className="container">
            <Link className="p-3 router-homepage" to="/">
              <div className=" rounded ">Home Page</div>
            </Link>
            <div className="row padding-tb m_dec-top align-items-center d-flex">
              <div className="col-lg-6">
                <div className="header-left w-100">
                  {singleUser?.photoUrl ? (
                    <div className="header-thumbnail">
                      <img alt={singleUser?.name} src={singleUser?.photoUrl} />
                    </div>
                  ) : (
                    <div className="header-thumbnail placeholder-glow">
                      <img width={200} height={200} className="placeholder " />
                    </div>
                  )}

                  <div className="header-info-content">
                    {singleUser?.name ? (
                      <h4 className="title">
                        {singleUser?.name}
                        {/* <FaExternalLinkAlt className="ms-3" /> */}
                      </h4>
                    ) : (
                      <h4 className="title placeholder-glow w-100">
                        <span className="placeholder col-12 rounded w-100">
                          User Name
                        </span>
                      </h4>
                    )}
                    {singleUser ? (
                      <div className="status-info mb-3">
                        <span className="me-3">
                          <FaMapMarkerAlt />
                        </span>
                        {singleUser?.address}
                      </div>
                    ) : (
                      <div className="status-info d-flex mb-5 placeholder-glow w-100">
                        <span className="me-3 ">
                          <FaMapMarkerAlt />
                        </span>
                        <span className="placeholder rounded col-12 w-100"></span>
                      </div>
                    )}
                    <div className="col-md-12 text-center d-flex gap-3 lg:justify-content-start justify-content-center align-items-center">
                      <FaEye />{" "}
                      <span>
                        Views: {user && singleUser?.profileViews?.length}
                      </span>{" "}
                      <span>
                        Likes: {user && singleUser?.profileLikes?.length}
                      </span>{" "}
                      {user &&
                      existingLiker !== user?.reloadUserInfo?.screenName ? (
                        <div
                          className="experience-footer  cursor-pointer"
                          onClick={toggleHeart}
                        >
                          <FaRegHeart />
                        </div>
                      ) : (
                        <div
                          className="experience-footer"
                          title="Already Liked"
                        >
                          <FaHeart color="#f9004d" />
                        </div>
                      )}
                    </div>
                    {/* <!-- end --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="header-right justify-content-between px-2">
                  {/* <!-- Start skiull area --> */}
                  <div className="skill-area section-height skill-main">
                    <div className="inner slide">
                      <div
                        className={`d-flex gap-3 justify-content-left ${
                          gitProfileData && "flex-wrap"
                        }  placeholder-glow w-100`}
                      >
                        {gitProfileData ? (
                          <span className="badge bg-success mt-3">
                            Followers: {gitProfileData?.followers}
                          </span>
                        ) : (
                          <span className="badge bg-success mt-3 placeholder placeholder-lg w-25">
                            {" "}
                          </span>
                        )}

                        {gitProfileData ? (
                          <span className="badge bg-warning mt-3">
                            Following: {gitProfileData?.following}
                          </span>
                        ) : (
                          <span className="badge bg-warning mt-3 placeholder placeholder-lg w-25">
                            {" "}
                          </span>
                        )}

                        {gitProfileData ? (
                          <span className="badge bg-primary mt-3">
                            Public Repos: {gitProfileData?.public_repos}
                          </span>
                        ) : (
                          <span className="badge bg-primary mt-3 placeholder placeholder-lg w-25">
                            {" "}
                          </span>
                        )}

                        {gitProfileData ? (
                          <span className="badge bg-info mt-3">
                            Public Gists: {gitProfileData?.public_gists}
                          </span>
                        ) : (
                          <span className="badge bg-info mt-3 placeholder placeholder-lg w-25">
                            {" "}
                          </span>
                        )}
                      </div>
                      <div className="skill-share-inner ">
                        <div className="status-info mb-3 px-5 mt-5"></div>
                        <ul className="text-left content mt-4 mb-2 p-0 placeholder-glow w-100">
                          <li>
                            <span style={{ color: "#f9004d" }}>
                              {singleUser?.bio}
                            </span>
                          </li>
                          {gitProfileData ? (
                            <li>Company: {gitProfileData?.company}</li>
                          ) : (
                            <li>
                              Company:
                              <span className="placeholder w-50 ms-3 rounded">
                                {" "}
                              </span>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End skiull area -->/ */}
                </div>
              </div>

              <div className="col-md-12">
                <div className="navs text-center d-flex justify-content-center">
                  <ul className="d-flex flex-wrap p-0">
                    <NavLink
                      activeclassname="active"
                      to={`/profile/${usernames}`}
                      end
                    >
                      <li>Profile</li>
                    </NavLink>
                    <NavLink
                      activeclassname="active"
                      to={`${usernames}/repos`}
                      end
                    >
                      <li>Repositories</li>
                    </NavLink>
                    <NavLink
                      activeclassname="active"
                      to={`${usernames}/followers`}
                      end
                    >
                      <li>Followers</li>
                    </NavLink>
                    <NavLink
                      activeclassname="active"
                      to={`${usernames}/following`}
                      end
                    >
                      <li>Following</li>
                    </NavLink>
                    <NavLink
                      activeclassname="active"
                      to={`${usernames}/starred`}
                      end
                    >
                      <li>Starred </li>
                    </NavLink>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ) : (
        "Loading"
      )} */}
    </>
  );
};

export default ProfileHeader;
