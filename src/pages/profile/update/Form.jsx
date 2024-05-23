import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa6";
import { SiCodeforces } from "react-icons/si";
import LinkHead from "../../../components/LinkHead";

const Form = () => {
  return (
    <>
      {" "}
      <LinkHead cattTitle={"Professional"} />
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
            />
          </div>
        </div>
      </div>
      <LinkHead cattTitle={"Social"} />
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
            />
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="form-group">
          <label htmlFor="contact-message">Bio</label>
          <textarea
            name="contact-message"
            id="contact-message"
            cols="10"
            rows="1"
            placeholder="Bio"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Form;
