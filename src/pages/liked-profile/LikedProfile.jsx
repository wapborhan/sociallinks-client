import useAllUsers from "../../hooks/useAllUsers";
import useMetaData from "../../hooks/useMetaData";
import LikedList from "./LikedList";

const LikedProfile = () => {
  const [allUsers] = useAllUsers();
  useMetaData("Liked Profile");

  return (
    <div className="sr-content pt--30 mt--80">
      <div className="container">
        <div className="sect-main">
          {/* <!-- Start Portfolio Area --> */}
          <div className="rn-portfolio-area " id="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    data-aos-once="true"
                    className="section-title text-center"
                  >
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
                        <span>05</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
                {allUsers.length > 0 ? (
                  allUsers.map((user, idx) => (
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
