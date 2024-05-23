import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa6";
import CodingForm from "./CodingForm";

const UpdateProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
                    <h2 className="title">Update Profile</h2>
                  </div>
                </div>
              </div>

              <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
                <div
                  data-aos-delay="600"
                  className="col-lg-10 mx-auto contact-input"
                >
                  <div className="contact-form-wrappers">
                    <div className="introduce">
                      <form
                        className="rnt-contact-form rwt-dynamic-form row"
                        id="contact-form"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        {/*  */}
                        <CodingForm register={register} errors={errors} />
                        {/*  */}
                        <div className="col-lg-12">
                          <button
                            name="submit"
                            type="submit"
                            id="submit"
                            className="rn-btn"
                          >
                            <span>Update Profile </span>
                            <FaArrowRight />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
