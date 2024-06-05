import { Toaster } from "react-hot-toast";
import LinkList from "./LinkList";
import useMetaData from "../../hooks/useMetaData";

const Profile = () => {
  useMetaData("Profile");
  return (
    <div className="sr-content pt--30">
      <Toaster position="top-center" reverseOrder={false} />
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
                    <h2 className="title"> Links</h2>
                  </div>
                </div>
              </div>
              <LinkList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
