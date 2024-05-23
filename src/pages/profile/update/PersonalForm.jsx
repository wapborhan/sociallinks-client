import { PiTextBFill } from "react-icons/pi";
import LinkHead from "../../../components/LinkHead";

const PersonalForm = ({ register, singleUser }) => {
  return (
    <>
      <LinkHead cattTitle={"Personal"} />
      <div className="col-lg-4">
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
    </>
  );
};

export default PersonalForm;
