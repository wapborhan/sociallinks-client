import { FaArrowRight } from "react-icons/fa";

const OthersForm = ({ register, singleUser }) => {
  return (
    <>
      <div className="col-lg-12">
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
              defaultValue={singleUser && singleUser?.links?.bio}
              placeholder="Bio"
              {...register("bio")}
            />
          </div>
        </div>
      </div>{" "}
      <div className="col-lg-12">
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
              defaultValue={singleUser && singleUser?.links?.address}
              placeholder="Address"
              {...register("address")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OthersForm;
