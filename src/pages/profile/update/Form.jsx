import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa6";
import { SiCodeforces } from "react-icons/si";
import LinkHead from "../../../components/LinkHead";

const Form = () => {
  return (
    <div data-aos-delay="600" className="col-lg-10 mx-auto contact-input">
      <div className="contact-form-wrappers">
        <div className="introduce">
          <form
            className="rnt-contact-form rwt-dynamic-form row"
            id="contact-form"
          >
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
            <div className="col-lg-12">
              <button
                name="submit"
                type="submit"
                id="submit"
                className="rn-btn"
              >
                <span>SEND MESSAGE</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-right"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
