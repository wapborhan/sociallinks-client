import LinkHead from "../../../components/LinkHead";
import { FaFilePdf, FaGlobe, FaLinkedin } from "react-icons/fa6";

const ProfForm = ({ register, singleUser }) => {
  return (
    <>
      <LinkHead cattTitle={"Professional"} />
      <div className="col-lg-4">
        <div className="form-group">
          <label htmlFor="contact-name">LinkedIn</label>
          <div className="d-flex labels">
            <div className="ico-btn p-2">
              <FaLinkedin />
            </div>
            <input
              className="form-control form-control-lg"
              name="linkedin"
              type="text"
              placeholder="Username"
              defaultValue={singleUser && singleUser?.links?.linkedin}
              {...register("linkedin")}
            />
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="form-group">
          <label htmlFor="contact-phone">Resume</label>
          <div className="d-flex labels">
            <div className="ico-btn p-2">
              <FaFilePdf />
            </div>
            <input
              className="form-control form-control-lg"
              name="resume"
              type="text"
              placeholder="Username"
              defaultValue={singleUser && singleUser?.links?.portfolio}
              {...register("resume")}
            />
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="form-group">
          <label htmlFor="contact-phone">Website</label>
          <div className="d-flex labels">
            <div className="ico-btn p-2">
              <FaGlobe />
            </div>
            <input
              className="form-control form-control-lg"
              name="portfolio"
              type="text"
              placeholder="Username"
              defaultValue={singleUser && singleUser?.links?.portfolio}
              {...register("portfolio")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfForm;
