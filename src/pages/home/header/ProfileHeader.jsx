/* eslint-disable react/prop-types */
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link, NavLink, useParams } from "react-router-dom";
import useSingleUser from "../../../hooks/useSingleUser";
import useGitProfileData from "../../../hooks/useGitProfileData";

const ProfileHeader = () => {
  const { usernames } = useParams();
  const [gitProfileData, error, isError] = useGitProfileData();
  const [singleUser] = useSingleUser(usernames);

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
                      <div className="status-info mb-5">
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

                    {/* <!-- end --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="header-right">
                  {/* <!-- Start skiull area --> */}
                  <div className="skill-area section-height skill-main w-100">
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
                        <div className="status-info mb-3 px-5 mt-5">
                          {singleUser?.bio}
                        </div>
                        {/* <ul className="text-left content mt-4 mb-2 p-0 placeholder-glow w-100">
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

                          {gitProfileData ? (
                            <li>
                              Twitter:
                              <a
                                className="text-decoration-none color-dark "
                                href={`http://www.twitter.com/${gitProfileData?.twitter_username}`}
                              >
                                {gitProfileData?.twitter_username}
                              </a>
                            </li>
                          ) : (
                            <li>
                              Twitter:
                              <span className="placeholder w-50 ms-3 rounded">
                                {" "}
                              </span>
                            </li>
                          )}

                          {gitProfileData ? (
                            <li>
                              Website:
                              <a
                                className="text-decoration-none color-dark"
                                href={`http://${gitProfileData?.blog}`}
                              >
                                {gitProfileData?.blog}
                              </a>
                            </li>
                          ) : (
                            <li>
                              Website:
                              <span className="placeholder w-50 ms-3 rounded">
                                {" "}
                              </span>
                            </li>
                          )}
                        </ul> */}
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
