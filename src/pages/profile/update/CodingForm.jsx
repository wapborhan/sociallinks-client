import { FaGithub, FaHackerrank } from "react-icons/fa6";
import { SiCodeforces } from "react-icons/si";
import LinkHead from "../../../components/LinkHead";

const CodingForm = ({ register, errors }) => {
  return (
    <>
      <LinkHead cattTitle={"Coding"} />
      <div className="col-lg-4">
        <div className="form-group">
          <label htmlFor="contact-name">Github</label>
          <div className="d-flex labels">
            <div className="ico-btn p-2">
              <FaGithub />
            </div>
            <input
              className="form-control form-control-lg"
              name="github"
              id="contact-name"
              type="text"
              placeholder="Username"
              {...register("github")}
            />
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="form-group">
          <label htmlFor="contact-phone">Hacker Rank</label>
          <div className="d-flex labels">
            <div className="ico-btn p-2">
              <FaHackerrank />
            </div>
            <input
              className="form-control form-control-lg"
              name="github"
              id="contact-name"
              type="text"
              placeholder="Username"
              {...register("exampleRequired")}
            />
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="form-group">
          <label htmlFor="contact-phone">Code Forces</label>
          <div className="d-flex labels">
            <div className="ico-btn p-2">
              <SiCodeforces />
            </div>
            <input
              className="form-control form-control-lg"
              name="github"
              id="contact-name"
              type="text"
              placeholder="Username"
              {...register("exampleRequireds")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CodingForm;
