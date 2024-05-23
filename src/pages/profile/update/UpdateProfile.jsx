import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa6";
import CodingForm from "./CodingForm";
import ProfForm from "./ProfForm";
import SocialForm from "./SocialForm";
import MessageForm from "./MessageForm";
import PersonalForm from "./PersonalForm";
import useSingleUser from "../../../hooks/useSingleUser";
import { useContext } from "react";
import { AuthContex } from "../../../provider/AuthProvider";

const UpdateProfile = () => {
  const { user } = useContext(AuthContex);
  const [singleUser] = useSingleUser(user?.reloadUserInfo?.screenName);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="sr-content pt--30 mt--100">
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
                    <h2 className="title">Update Profile</h2>
                  </div>
                </div>
              </div>

              <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
                <div className="col-lg-10 mx-auto contact-input">
                  <div className="contact-form-wrappers">
                    <div className="introduce">
                      <form
                        className="rnt-contact-form rwt-dynamic-form row"
                        id="contact-form"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        {/* input form */}
                        <CodingForm
                          register={register}
                          errors={errors}
                          singleUser={singleUser}
                        />
                        <ProfForm
                          register={register}
                          errors={errors}
                          singleUser={singleUser}
                        />
                        <SocialForm
                          register={register}
                          errors={errors}
                          singleUser={singleUser}
                        />
                        <MessageForm
                          register={register}
                          errors={errors}
                          singleUser={singleUser}
                        />
                        <PersonalForm
                          register={register}
                          errors={errors}
                          singleUser={singleUser}
                        />
                        {/* input form */}
                        <div className="col-lg-12">
                          <button
                            name="submit"
                            type="submit"
                            id="submit"
                            className="rn-btn mt--40"
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
