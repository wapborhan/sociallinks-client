import { Toaster } from "react-hot-toast";
import LinkList from "./LinkList";

const Profile = () => {
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
                    <h2 className="title"> Links</h2>
                  </div>
                </div>
              </div>
              <LinkList />;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
