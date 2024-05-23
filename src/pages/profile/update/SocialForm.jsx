import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import LinkHead from "../../../components/LinkHead";

const SocialForm = ({ register, singleUser }) => {
  return (
    <>
      <LinkHead cattTitle={"Social"} />
      <div className="col-lg-4">
        <div className="form-group">
          <label htmlFor="contact-name">Facebook</label>
          <div className="d-flex labels">
            <div className="ico-btn p-2">
              <FaSquareFacebook />
            </div>
            <input
              className="form-control form-control-lg"
              name="facebook"
              type="text"
              placeholder="Username"
              defaultValue={singleUser && singleUser?.links?.facebook}
              {...register("facebook")}
            />
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="form-group">
          <label htmlFor="contact-phone">Twitter</label>
          <div className="d-flex labels">
            <div className="ico-btn p-2">
              <FaSquareXTwitter />
            </div>
            <input
              className="form-control form-control-lg"
              name="twitter"
              type="text"
              placeholder="Username"
              defaultValue={singleUser && singleUser?.links?.twitter}
              {...register("twitter")}
            />
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="form-group">
          <label htmlFor="contact-phone">Instagram</label>
          <div className="d-flex labels">
            <div className="ico-btn p-2">
              <FaSquareInstagram />
            </div>
            <input
              className="form-control form-control-lg"
              name="instagram"
              type="text"
              placeholder="Username"
              defaultValue={singleUser && singleUser?.links?.instagram}
              {...register("instagram")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialForm;
