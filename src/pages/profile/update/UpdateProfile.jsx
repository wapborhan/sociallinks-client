import PlaceHolderCard from "../../../components/PlaceHolderCard";
import Form from "./Form";

const UpdateProfile = () => {
  return (
    <div className="sr-content pt--30 mt--100">
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
                    <h2 className="title"> Update Profile</h2>
                  </div>
                </div>
              </div>

              <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
