import { FaArrowRight } from "react-icons/fa";
import { PiTextBFill } from "react-icons/pi";

const OthersForm = ({ register, singleUser }) => {
  return (
    <>
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-3">
            <div className="form-group">
              <label htmlFor="contact-name">Profile Picture</label>
              <div className="d-flex">
                <img
                  src={singleUser && singleUser?.photoUrl}
                  className="rounded  labels  lg:w-75"
                  alt=""
                  title="Change Github Profile Picture to change This Image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="form-group">
              <label htmlFor="contact-name">Bio</label>
              <div className="d-flex labels">
                <div className="ico-btn p-2">
                  <FaArrowRight />
                </div>
                <input
                  className="form-control form-control-lg"
                  name="github"
                  type="text"
                  defaultValue={singleUser && singleUser?.bio}
                  placeholder="Bio"
                  {...register("bio")}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-name">Address</label>
              <div className="d-flex labels">
                <div className="ico-btn p-2">
                  <FaArrowRight />
                </div>
                <input
                  className="form-control form-control-lg"
                  name="github"
                  type="text"
                  defaultValue={singleUser && singleUser?.address}
                  placeholder="Address"
                  {...register("address")}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-name">Blog</label>
              <div className="d-flex labels">
                <div className="ico-btn p-2">
                  <PiTextBFill />
                </div>
                <input
                  className="form-control form-control-lg"
                  name="blog"
                  type="text"
                  defaultValue={singleUser && singleUser?.links?.blog}
                  placeholder="Username"
                  {...register("blog")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OthersForm;
