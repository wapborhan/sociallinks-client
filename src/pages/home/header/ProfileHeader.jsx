/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../../../provider/AuthProvider";
import axios from "axios";

const ProfileHeader = () => {
  const [data, setUserData] = useState();

  const { user } = useContext(AuthContex);
  const username = user?.reloadUserInfo?.screenName;

  useEffect(() => {
    // fetch user data
    axios
      .get(
        `https://api.github.com/users/${username}?clientId=${
          import.meta.env.VITE_clientID
        }&clientSecret=${import.meta.env.VITE_clientSecret}`,
        {
          auth: import.meta.env.VITE_GITHUB_USERNAME,
          password: import.meta.env.VITE_GITHUB_OLD_TOKEN,
        }
      )
      .then((response) => {
        setUserData(response.data);
      });
  }, [username]);

  console.log(data);

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
                <div className="header-left">
                  {data?.avatar_url ? (
                    <div className="header-thumbnail">
                      <img alt={data?.name} src={data?.avatar_url} />
                    </div>
                  ) : (
                    <div className="header-thumbnail placeholder-glow">
                      <img width={200} height={200} className="placeholder " />
                    </div>
                  )}

                  <div className="header-info-content w-50">
                    {data?.name ? (
                      <h4 className="title">
                        <Link href={data?.html_url}>
                          {data?.name}
                          {/* <FaExternalLinkAlt className="ms-3" /> */}
                        </Link>
                      </h4>
                    ) : (
                      <h4 className="title placeholder-glow w-100">
                        <span className="placeholder col-12 rounded w-100"></span>
                      </h4>
                    )}
                    {data?.location ? (
                      <div className="status-info mb-5">
                        <span className="me-3">
                          <FaMapMarkerAlt />
                        </span>
                        {data?.location}
                      </div>
                    ) : (
                      <div className="status-info d-flex mb-5 placeholder-glow w-100">
                        <span className="me-3 ">
                          <FaMapMarkerAlt />
                        </span>
                        <span className="placeholder rounded col-12 w-100"></span>
                      </div>
                    )}

                    {/* <div className="status-info mb-3 px-5">{data?.bio}</div> */}

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
                          data && "flex-wrap"
                        }  placeholder-glow w-100`}
                      >
                        {data ? (
                          <span className="badge bg-success mt-3">
                            Followers: {data?.followers}
                          </span>
                        ) : (
                          <span className="badge bg-success mt-3 placeholder placeholder-lg w-25">
                            {" "}
                          </span>
                        )}

                        {data ? (
                          <span className="badge bg-warning mt-3">
                            Following: {data?.following}
                          </span>
                        ) : (
                          <span className="badge bg-warning mt-3 placeholder placeholder-lg w-25">
                            {" "}
                          </span>
                        )}

                        {data ? (
                          <span className="badge bg-primary mt-3">
                            Public Repos: {data?.public_repos}
                          </span>
                        ) : (
                          <span className="badge bg-primary mt-3 placeholder placeholder-lg w-25">
                            {" "}
                          </span>
                        )}

                        {data ? (
                          <span className="badge bg-info mt-3">
                            Public Gists: {data?.public_gists}
                          </span>
                        ) : (
                          <span className="badge bg-info mt-3 placeholder placeholder-lg w-25">
                            {" "}
                          </span>
                        )}
                      </div>
                      <div className="skill-share-inner ">
                        <ul className="text-left content mt-4 mb-2 p-0 placeholder-glow w-100">
                          {data ? (
                            <li>Company: {data?.company}</li>
                          ) : (
                            <li>
                              Company:
                              <span className="placeholder w-50 ms-3 rounded">
                                {" "}
                              </span>
                            </li>
                          )}

                          {data ? (
                            <li>
                              Twitter:
                              <a
                                className="text-decoration-none color-dark "
                                href={`http://www.twitter.com/${data?.twitter_username}`}
                              >
                                {data?.twitter_username}
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

                          {data ? (
                            <li>
                              Website:
                              <a
                                className="text-decoration-none color-dark"
                                href={`http://${data?.blog}`}
                              >
                                {data?.blog}
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
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End skiull area -->/ */}
                </div>
              </div>
              <div className="col-md-12">
                <div className="navs text-center d-flex justify-content-center">
                  <ul className="d-flex">
                    <NavLink className="" to="/profile">
                      <li>Profile</li>
                    </NavLink>
                    <NavLink className="" to="/repo">
                      <li>Repositories</li>
                    </NavLink>
                    <NavLink className="" to="/followers">
                      <li>Followers</li>
                    </NavLink>
                    <NavLink className="" to="/following">
                      <li>Following</li>
                    </NavLink>
                    <NavLink className="" to="/starred">
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
