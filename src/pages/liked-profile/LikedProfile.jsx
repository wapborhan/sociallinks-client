import { useEffect, useState } from "react";
import useMetaData from "../../hooks/useMetaData";
import LikedList from "./LikedList";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";

const LikedProfile = () => {
  useMetaData("Liked Profile");
  const [likedUserData, setLikedUserData] = useState([]);
  const [likedUser, setLikedUser] = useState([]);
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const fetchLikedUser = async () => {
        try {
          const res = await axiosPublic.get(
            `/liked/${user?.reloadUserInfo?.screenName}`
          );
          setLikedUser(res.data);
        } catch (error) {
          console.error("Error fetching liked users:", error);
        }
      };

      fetchLikedUser();
    }

    const fetchData = async () => {
      try {
        const results = await Promise.all(
          likedUser.map(async (user) => {
            const res = await axiosPublic.get(`/user/${user}`);
            return res.data;
          })
        );
        setLikedUserData(results);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [likedUser, axiosPublic, user]);

  return (
    <div className="sr-content pt--30 mt--80">
      <div className="container">
        <div className="sect-main">
          {/* <!-- Start Portfolio Area --> */}
          <div className="rn-portfolio-area " id="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <span className="subtitle">
                      Visit portfolio and keep your feedback
                    </span>
                    <h2 className="title"> Liked Profile</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="catt-title">
                    <h3>
                      Some <span className="txt-success">Account</span>{" "}
                      {"I've "}
                      Liked
                    </h3>
                    <div className="text-right">
                      <a className="rn-btn btn-brd mr--30">
                        <span>
                          {likedUser.length.toString().padStart(2, "0")}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
                {likedUserData.length > 0 ? (
                  likedUserData.map((user, idx) => (
                    <LikedList key={idx} user={user} />
                  ))
                ) : (
                  <div className="text-center mt-5">No User Found!</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikedProfile;
